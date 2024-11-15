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
      onInfoUpdates: (info) =>
        store.dispatch(
          setInfo({
            ...info,
            timestamp: Date.now(),
          })
        ),
      onNewEvents: (events) =>
        store.dispatch(
          setEvent({
            ...events,
            timestamp: Date.now(),
          })
        ),
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

  const onGameInfoUpdated = async (event: overwolf.games.GameInfoUpdatedEvent) => {
    if (
      event.runningChanged &&
      event.gameInfo?.classId === HEARTHSTONE_CLASS_ID
    ) {
      startApp("onGameInfoUpdated");
    }
  };

  const onAppLaunchTriggered = () => {
    startApp("onAppLaunchTriggered");
  };

  useEffect(() => {
    startApp("on initial load");
    overwolf.games.onGameInfoUpdated.addListener(onGameInfoUpdated);
    overwolf.extensions.onAppLaunchTriggered.addListener(onAppLaunchTriggered);
    return () => {
      overwolf.games.onGameInfoUpdated.removeListener(onGameInfoUpdated);
      overwolf.extensions.onAppLaunchTriggered.removeListener(onAppLaunchTriggered);
    };
  }, [startApp]);

  return null;
};

export default BackgroundWindow;
