import React, { FC, useEffect, useState } from "react";
import Background from "features/background-window/window";
import { InGameWindow } from "features/inGameWindow";
import { Desktop } from "features/desktopWindow";
import { WINDOW_NAMES } from "./constants";

import "./App.css";

const { BACKGROUND, DESKTOP, INGAME } = WINDOW_NAMES;

const CurrentPage = ({ page }: { page: string }): JSX.Element => {
  switch (page) {
    case BACKGROUND:
      return <Background />;
    case DESKTOP:
      return <Desktop />;
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

  async function preLoad() {
    const currentWindow = await getCurrentWindow();
    setPage(currentWindow);
  }

  useEffect(() => {
    preLoad();
  }, []);
  return <CurrentPage page={page} />;
};
