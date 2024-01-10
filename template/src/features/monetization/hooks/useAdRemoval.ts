import { useEffect, useState } from "react";
import { SUBSCRIPTION_ID } from "../constants";
import { isDev, sleep } from "lib/utils";
import { log } from "lib/log";

async function openSubscribeWindow() {
  if (isDev) {
    log(
      "dev mode, not opening subscribe window",
      "src/features/monetization/hooks/useAdRemoval.ts",
      "openSubscribeWindow"
    );
    return;
  }
  const UID = await new Promise<string>((resolve, reject) => {
    overwolf.extensions.current.getManifest((manifest) => {
      if (manifest) {
        resolve(manifest.UID);
      } else {
        reject(null);
      }
    });
  });
  overwolf.utils.openStore({
    page: "SubscriptionPage" as overwolf.utils.enums.eStorePage.SubscriptionPage,
    uid: UID,
  });
}

const useAdRemoval = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // Function to handle the subscription change event

  const handleSubscriptionState = () => {
    setIsSubscribed(true);
  };

  useEffect(() => {
    if (isDev) {
      setIsSubscribed(false);
      setIsLoading(false);
      return;
    }
    // console.log('plan', subscriptionId)
    // Subscribe to the subscription change event
    const handleSubscriptionChange = async (
      info: overwolf.profile.subscriptions.SubscriptionChangedEvent
    ) => {
      setIsLoading(true);
      console.log("Subscription changed", info);
      if (Array.isArray(info?.plans) && info.plans.includes(SUBSCRIPTION_ID)) {
        handleSubscriptionState();
      }
      await sleep(3_000);
      setIsLoading(false);
    };

    overwolf.profile.subscriptions.getActivePlans(async (info) => {
      console.log("Active plans", info);
      if (
        info.success &&
        Array.isArray(info?.plans) &&
        info.plans.includes(SUBSCRIPTION_ID)
      ) {
        handleSubscriptionState();
      }
      await sleep(3_000);
      setIsLoading(false);
    });
    overwolf.profile.subscriptions.onSubscriptionChanged.addListener(
      handleSubscriptionChange
    );

    // Unsubscribe from the event when the component unmounts
    return () => {
      overwolf.profile.subscriptions.onSubscriptionChanged.removeListener(
        handleSubscriptionChange
      );
    };
  }, []);

  return { isSubscribed, isLoading };
};

export { useAdRemoval, openSubscribeWindow };
