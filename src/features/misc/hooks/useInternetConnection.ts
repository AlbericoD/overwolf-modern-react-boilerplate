import { useEffect, useState } from "react";

function useInternetConnection() {
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    setIsConnected(window.navigator.onLine);

    window.addEventListener("online", () => setIsConnected(true));
    window.addEventListener("offline", () => setIsConnected(false));

    return () => {
      window.removeEventListener("online", () => setIsConnected(true));
      window.removeEventListener("offline", () => setIsConnected(false));
    };
  }, []);

  return isConnected;
}

export { useInternetConnection };
