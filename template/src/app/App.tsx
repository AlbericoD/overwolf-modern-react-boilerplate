import React, { FC, useEffect, useState } from "react";
import InGameWindow from "features/in-game-window/InGameWindow";
import DesktopWindow from "features/desktop-window/DesktopWindow";
import BackgroundWindow from "features/background-window/BackgroundWindow";
import { WINDOW_NAMES } from "./constants";

import "./App.css";

const { BACKGROUND, DESKTOP, INGAME } = WINDOW_NAMES;

const CurrentPage = ({ page }: { page: string }): JSX.Element => {
  switch (page) {
    case BACKGROUND:
      return <BackgroundWindow />;
    case DESKTOP:
      return <DesktopWindow />;
    case INGAME:
      return <InGameWindow />;
    default:
      return <p>Loading</p>;
  }
};

const getCurrentWindow = (): Promise<string> =>
  new Promise(resolve =>
    overwolf.windows.getCurrentWindow(result => {
      resolve(result.window.name);
    })
  );

export const App: FC = (): JSX.Element => {
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    async function preLoad() {
      if (process.env.NODE_ENV === "development") {
        setPage(DESKTOP);
      } else {
        const currentWindow = await getCurrentWindow();
        setPage(currentWindow);
      }
    }
    preLoad();
  }, []);
  return <CurrentPage page={page} />;
};
