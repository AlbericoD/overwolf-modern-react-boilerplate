import type { OwAd } from "@overwolf/types/owads";
import { useEffect, useRef, useState } from "react";
import { INJECTED_OWADS_ID, OWADS_URL } from "../constants";
import { log } from "lib/log";
import { isDev, sleep } from "lib/utils";

declare global {
  interface Window {
    OwAd?: typeof OwAd;
  }
}

export type UseOverwolfAds = Record<"width" | "height", number>;

export function useOverwolfAds({ width, height }: UseOverwolfAds) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (width === 0 || height === 0) {
      log(
        "width === 0 || height === 0",
        "src/features/monetization/hooks/useOverwolfAds.ts",
        "useOverwolfAds"
      );

      return;
    }

    let owAds: OwAd | undefined;
    function onOwAdReady() {
      if (
        typeof window.OwAd === "undefined" ||
        containerRef.current === null ||
        isDev
      ) {
        return setIsLoading(false);
      }
      owAds = new window.OwAd(containerRef.current, {
        size: { width, height },
      });

      owAds.addEventListener("player_loaded ", () => {
        log(
          "player_loaded",
          "src/features/monetization/hooks/useOverwolfAds.ts",
          "useOverwolfAds"
        );
      });

      owAds.addEventListener("play", () => {
        setIsPlaying(true);
      });

      // owAds.addEventListener('display_ad_loaded', () => {
      //   setIsPlaying(true);
      // });

      // owAds.addEventListener('impression', () => {
      //   setIsPlaying(true);
      // });

      // owAds.addEventListener('complete', async () => {
      //   await sleep(1000);
      //   setIsPlaying(false);
      // });
      owAds.addEventListener("error", async () => {
        await sleep(1000);
        setIsPlaying(false);
      });
    }

    const script = document.createElement("script");
    script.id = INJECTED_OWADS_ID;

    if (document.getElementById(INJECTED_OWADS_ID)) {
      onOwAdReady();
    } else {
      script.src = OWADS_URL;
      script.async = true;
      document.body.appendChild(script);
      script.onload = onOwAdReady;
    }
    return () => {
      if (document.getElementById(INJECTED_OWADS_ID))
        document.body.removeChild(script);
      //remove event listeners if you enabled them
      ["player_loaded", "play", "display_ad_loaded"].forEach((event) => {
        owAds?.removeEventListener(event, () => {});
      });
    };
  }, [width, height]);

  return {
    isLoading,
    containerRef,
    isPlaying,
  };
}
