import { useState, useEffect, useCallback } from "react";
export interface UseRunningGamePayload {
  gameRunning: boolean;
  id: number;
  title: string;
}
interface OWGameRunningEvent {
  gameInfo: {
    isInFocus: boolean;
    isRunning: boolean;
    allowsVideoCapture: boolean;
    title: string;
    id: number;
    width: number;
    height: number;
    logicalWidth: number;
    logicalHeight: number;
    renderers: [string, string];
    detectedRenderer: string;
  };
  resolutionChanged: boolean;
  focusChanged: boolean;
  runningChanged: boolean;
  gameChanged: boolean;
}
export const useRunningGame = () => {
  const [game, setGame] = useState<UseRunningGamePayload>();

  function onGameInfoUpdated(payload: OWGameRunningEvent) {
    const gameRunning: UseRunningGamePayload = {
      gameRunning: payload.gameInfo?.isRunning,
      id: Math.round((payload.gameInfo?.id || 0) / 10),
      title: payload.gameInfo?.title
    };
    const gameStateChanged = payload?.runningChanged || payload?.gameChanged;

    if (gameStateChanged) setGame(gameRunning);
  }

  const addListener = useCallback(async () => {
    overwolf.games.onGameInfoUpdated.removeListener(
      (payload: OWGameRunningEvent) => onGameInfoUpdated(payload)
    );
    overwolf.games.onGameInfoUpdated.addListener(
      (payload: OWGameRunningEvent) => onGameInfoUpdated(payload)
    );
  }, []);

  useEffect(() => {
    addListener();
  }, [addListener]);

  return [game] as const;
};
