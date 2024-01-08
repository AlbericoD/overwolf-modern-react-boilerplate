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
      console.log("init app is called", reason);
      const hearthstone = await getHearthstoneGame();
      if (hearthstone) {
        await Promise.all([start(), desktop?.minimize()]);
      } else {
        await Promise.all([stop(), ingame?.close(), desktop?.restore()]);
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
