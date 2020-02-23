import { useEffect, useState, useCallback } from "react";

const Overwolf = overwolf.games.events;
const REGISTER_RETRY_TIMEOUT = 10000;

interface GameEventData<GameInfo, GameEvent> {
  info?: GameInfo;
  events?: GameEvent[];
}

export const useGameEventProvider = <GameInfo, GameEvent>() => {
  const [info, setInfo] = useState<GameInfo>();
  const [event, setEvent] = useState<GameEvent[]>();
  const [requiredFeatures, setFeatures] = useState<string[]>([]);

  function handleGameEvent({ info, events }: GameEventData<any, any>) {
    info && setInfo(info);
    events && setEvent(events);
  }
  function registerToGEP() {
    Overwolf.setRequiredFeatures(requiredFeatures, registerToGepCallback);
  }
  function addListener() {
    Overwolf.onInfoUpdates2.removeListener(handleGameEvent);
    Overwolf.onNewEvents.removeListener(handleGameEvent);
    Overwolf.onInfoUpdates2.addListener(handleGameEvent);
    Overwolf.onNewEvents.addListener(handleGameEvent);
  }
  async function registerToGepCallback({ success }: { success: boolean }) {
    if (success) addListener();
    else
      setTimeout(() => {
        registerToGEP();
      }, REGISTER_RETRY_TIMEOUT);
  }

  const runGep = useCallback(registerToGEP, []);
  const setGameFeatures = useCallback(setFeatures, []);

  useEffect(() => {
    requiredFeatures.length && runGep();
    return () => {
      Overwolf.onInfoUpdates2.removeListener(handleGameEvent);
      Overwolf.onNewEvents.removeListener(handleGameEvent);
    };
  }, [runGep, requiredFeatures]);

  return [{ info, event }, setGameFeatures] as const;
};
