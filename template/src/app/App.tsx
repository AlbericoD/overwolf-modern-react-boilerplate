import { useEffect, useState, Suspense } from "react";
import { CurrentPage } from "./CurrentPage";
import { Loading } from "components/Loading";
import { getCurrentWindow } from "lib/overwolf-essentials";
import { log } from "lib/log";
import "./root.css";

//This is the main component of the app, it is the root of the app
//each Page component is rendered in a different window
//if NODE_ENV is set to development, the app will render in a window named 'dev'
export const App = () => {
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    (async function preLoad() {
      const currentWindow = await getCurrentWindow();
      setPage(currentWindow);
      log(
        JSON.stringify({ currentWindow }, null, 2),
        "src/app/App.tsx",
        "useEffect - preLoad"
      );
    })();
  }, []);
  //this is fallback for the loading current screen
  return (
    <Suspense fallback={<Loading />}>
      <CurrentPage page={page} />
    </Suspense>
  );
};
