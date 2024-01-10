import { useEffect, useState, Suspense } from "react";
import { CurrentScreen } from "./CurrentScreen";
import { Loading } from "components/Loading";
import { getCurrentWindow } from "lib/overwolf-essentials";
import "../shared/root.css";
import { log } from "lib/log";

//This is the main component of the app, it is the root of the app
//each Page component is rendered in a different window
//if NODE_ENV is set to development, the app will render in a window named 'dev'
export const App = () => {
  const [screenName, setScreenName] = useState<string>("");

  useEffect(() => {
    (async function preLoad() {
      const currentWindow = await getCurrentWindow();
      setScreenName(currentWindow);
      log(
        `Request screen: ${currentWindow}`,
        "src/app/components/App.tsx",
        "useEffect",
      );
    })();
  }, []);
  //this is fallback for the loading current screen
  return (
    <Suspense fallback={<Loading />}>
      <CurrentScreen name={screenName} />
    </Suspense>
  );
};
