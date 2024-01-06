import { lazy } from "react";
import { WINDOW_NAMES } from "./constants";
import { log } from "console";

//window name in manifest file
const { BACKGROUND, DESKTOP, INGAME } = WINDOW_NAMES;

//lazy load window components, so that they are not loaded until they are needed
//this is done to reduce the amount of time spent loading
const BackgroundScreen = lazy(
  () => import("features/background/BackgroundScreen")
);
const DesktopScreen = lazy(() => import("screens/desktop/Screen"));
const InGameScreen = lazy(() => import("screens/ingame/Screen"));

type CurrentPageProps = {
  page: string;
};
//return the current page based on the window name, the current window name is passed in as a prop
//this is used to determine which page to render
export const CurrentPage = ({ page }: CurrentPageProps) => {
  log(`Request screen: ${page}`, "src/app/CurrentPage.tsx", "CurrentPage");
  switch (page) {
    case BACKGROUND:
      return <BackgroundScreen />;
    case DESKTOP:
      return <DesktopScreen />;
    case INGAME:
      return <InGameScreen />;
    default:
      log(
        `No screen found for: ${page}`,
        "src/app/CurrentPage.tsx",
        "CurrentPage"
      );
      return <p>Loading ...</p>;
  }
};
