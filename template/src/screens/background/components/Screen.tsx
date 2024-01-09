import {
  REQUIRED_FEATURES,
  WINDOW_NAMES,
  RETRY_TIMES,
  DISPLAY_OVERWOLF_HOOKS_LOGS,
} from "app/shared/constants";
import { useGameEventProvider, useWindow } from "overwolf-hooks";
import { useCallback, useEffect } from "react";
import { HEARTHSTONE_CLASS_ID, getHearthstoneGame } from "lib/games";
import { setInfo, setEvent } from "../stores/background";
import store from "app/shared/store";
import { log } from "lib/log";

const { DESKTOP, INGAME } = WINDOW_NAMES;

const BackgroundWindow = () => {
  const [desktop] = useWindow(DESKTOP, DISPLAY_OVERWOLF_HOOKS_LOGS);
  const [ingame] = useWindow(INGAME, DISPLAY_OVERWOLF_HOOKS_LOGS);
  const { start, stop } = useGameEventProvider(
    {
      onInfoUpdates: (info) => store.dispatch(setInfo(info)),
      onNewEvents: (events) => store.dispatch(setEvent(events)),
    },
    REQUIRED_FEATURES,
    RETRY_TIMES,
    DISPLAY_OVERWOLF_HOOKS_LOGS
  );
  const startApp = useCallback(
    async (reason: string) => {
      //if the desktop or ingame window is not ready we don't want to start the app
      if (!desktop || !ingame) return;
      log(reason, "src/screens/background/components/Screen.tsx", "startApp");
      const hearthstone = await getHearthstoneGame();
      if (hearthstone) {
        await Promise.all([start(), ingame?.restore(), desktop?.minimize()]);
      } else {
        await Promise.all([stop(), desktop?.restore()]);
      }
    },
    [desktop, ingame, start, stop]
  );

  useEffect(() => {
    startApp("on initial load");
    overwolf.games.onGameInfoUpdated.addListener(async (event) => {
      if (
        event.runningChanged &&
        event.gameInfo?.classId === HEARTHSTONE_CLASS_ID
      ) {
        startApp("onGameInfoUpdated");
      }
    });
    startApp("onAppLaunchTriggered");

    return () => {
      overwolf.games.onGameInfoUpdated.removeListener(() => {});
      overwolf.extensions.onAppLaunchTriggered.removeListener(() => {});
    };
  }, [startApp]);

  return null;
};

export default BackgroundWindow;
