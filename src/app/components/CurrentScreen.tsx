import { lazy, memo } from "react";
import { WINDOW_NAMES } from "../shared/constants";

//window name in manifest file
const { BACKGROUND, DESKTOP, INGAME } = WINDOW_NAMES;

//lazy load window components, so that they are not loaded until they are needed
//this is done to reduce the amount of time spent loading
const BackgroundScreen = lazy(() => import("screens/background"));
const DesktopScreen = lazy(() => import("screens/desktop"));
const InGameScreen = lazy(() => import("screens/ingame"));

type CurrentScreenProps = {
  name: string;
};
//return the current page based on the window name, the current window name is passed in as a prop
//this is used to determine which page to render
export const CurrentScreen = memo(({ name }: CurrentScreenProps) => {
  switch (name) {
    case BACKGROUND:
      return <BackgroundScreen />;
    case DESKTOP:
      return <DesktopScreen />;
    case INGAME:
      return <InGameScreen />;
    default:
      return null;
  }
});
