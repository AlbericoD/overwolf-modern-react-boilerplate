import { log } from "lib/log";
import { lazy } from "react";
import { WINDOW_NAMES } from "../shared/constants";

//window name in manifest file
const { BACKGROUND, DESKTOP, INGAME, NOTIFICATION } = WINDOW_NAMES;

//lazy load window components, so that they are not loaded until they are needed
//this is done to reduce the amount of time spent loading
const BackgroundScreen = lazy(() => import("screens/background/Screen"));
const DesktopScreen = lazy(() => import("screens/desktop"));
const InGameScreen = lazy(() => import("screens/ingame"));
const NotificationScreen = lazy(() => import("screens/notification"));

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
    case NOTIFICATION:
      return <NotificationScreen />;
    default:
      log(
        `No screen found for: ${page}`,
        "src/app/CurrentPage.tsx",
        "CurrentPage"
      );
      return <p>Loading ...</p>;
  }
};
