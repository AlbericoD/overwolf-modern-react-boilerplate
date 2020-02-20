import React, { FC, useCallback, useEffect } from "react";
import { WINDOW_NAMES } from "app/constants";
import { useRunningGame } from "./hooks";
import { useWindow } from "hooks";

const { DESKTOP, INGAME } = WINDOW_NAMES;

enum Game {
  "GameExample" = 99999
}

const BackgroundWindow: FC = () => {
  const [currentGame] = useRunningGame();
  const [desktopWindow] = useWindow(DESKTOP);
  const [ingameWindow] = useWindow(INGAME);

  const openStartupWindow = useCallback(() => {
    const gameRunning =
      currentGame?.id === Game.GameExample && currentGame?.gameRunning;
    const currentWindow = gameRunning ? ingameWindow : desktopWindow;
    currentWindow?.restore();
  }, [desktopWindow, ingameWindow, currentGame]);

  useEffect(() => {
    openStartupWindow();
  }, [openStartupWindow]);

  return <></>;
};

export default BackgroundWindow;
