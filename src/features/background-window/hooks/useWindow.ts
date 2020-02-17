import { useState, useCallback, useEffect } from "react";
interface WindowInfo {
  name: string;
  id: string;
  state: string;
  stateEx: "closed" | "minimized" | "hidden" | "normal" | "maximized";
  isVisible: boolean;
  left: number;
  top: number;
  width: number;
  height: number;
}
const obtainWindow = (name: string): Promise<WindowInfo> =>
  new Promise((resolve, reject) => {
    overwolf.windows.obtainDeclaredWindow(name, response => {
      if (!response.success) reject(response);
      resolve(response.window);
    });
  });
const minimize = (name: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      overwolf.windows.minimize(name, result => {
        if (result.success) resolve();
        else reject(result);
      });
    } catch (e) {
      reject(e);
    }
  });
};
const close = (name: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      overwolf.windows.close(name, () => {
        resolve();
      });
    } catch (e) {
      reject(e);
    }
  });
};
const maximize = (name: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      overwolf.windows.maximize(name, result => {
        if (result.success) resolve();
        else reject(result);
      });
    } catch (e) {
      reject(e);
    }
  });
};
const restore = (name: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      overwolf.windows.restore(name, result => {
        if (result.success) resolve();
        else reject(result);
      });
    } catch (e) {
      reject(e);
    }
  });
};
interface OwWindow {
  minimize: () => void;
  maximize: () => void;
  restore: () => void;
  close: () => void;
}
export const useWindow = (name: string) => {
  const [owDeclaredWindow, setOwDeclaredWindow] = useState<WindowInfo>();
  const [owWindow, setOwWindow] = useState<OwWindow>();

  const obtainDeclaredWindow = useCallback(async () => {
    const delcaredWindow = await obtainWindow(name);
    setOwDeclaredWindow(delcaredWindow);
  }, [name]);

  useEffect(() => {
    if (owDeclaredWindow) {
      const { id } = owDeclaredWindow;
      const windowActions = {
        minimize: async () => await minimize(id),
        maximize: async () => await maximize(id),
        restore: async () => await restore(id),
        close: async () => await close(id)
      };
      setOwWindow(windowActions);
    }
  }, [owDeclaredWindow]);

  useEffect(() => {
    obtainDeclaredWindow();
  }, [name]);

  return [owWindow] as const;
};
