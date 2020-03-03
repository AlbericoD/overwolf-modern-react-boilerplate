import rootReducer from "app/rootReducer";
import { WINDOW_NAMES } from "app/constants";

import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "remote-redux-devtools";

const reduxStore = configureStore({
  reducer: rootReducer,
  devTools: false,
  enhancers: [
    devToolsEnhancer({
      realtime: true,
      name: "Overwolf ",
      hostname: "localhost",
      port: 8000
    })
  ]
});
class MockGepMethods {
  static addListener(callback: (payload?: any) => void): void {
    //callback();
  }
  static removeListener(callback: (payload?: any) => void): void {
    //callback();
  }
}
class MockCommonMethods {
  static addListener(callback: (payload?: any) => void): void {
    callback();
  }
  static removeListener(callback: (payload?: any) => void): void {
    callback();
  }
  static simpleRequestInterval(interval: number, callback: () => void): void {
    console.info(`Callback interval ${interval}`);
    callback();
  }
}
/**
 *
 * Overwolf Mock
 *
 * Progress:
 * benchmarking: 100%
 * windows: 10%
 * games: 70%,
 * utils: 10%
 */

//@ts-ignore
const overwolfMock: typeof overwolf = {
  version: "BROWSER DEV",
  benchmarking: {
    onFpsInfoReady: MockCommonMethods,
    onHardwareInfoReady: MockCommonMethods,
    onProcessInfoReady: MockCommonMethods,
    requestFpsInfo: MockCommonMethods.simpleRequestInterval,
    requestHardwareInfo: MockCommonMethods.simpleRequestInterval,
    requestProcessInfo: MockCommonMethods.simpleRequestInterval,
    requestPermissions: (callback: () => void) => {
      callback();
    },
    stopRequesting: () => {}
  },
  //@ts-ignore
  settings: {
    getCurrentOverwolfLanguage: (
      callback: (result: overwolf.settings.IInitI18N) => void
    ) => {
      callback({ status: "success", language: "en" });
    }
  },
  //@ts-ignore
  utils: {
    openUrlInDefaultBrowser: (url: string) => {
      window.open(url);
    }
  },
  //@ts-ignore
  windows: {
    getCurrentWindow(callback: (result: any) => void): void {
      callback({ window: { name: WINDOW_NAMES.BACKGROUND }, success: true });
    },
    //@ts-ignore
    getMainWindow: () => ({ reduxStore }),
    obtainDeclaredWindow(
      windowName: string,
      callback: (response: any) => void
    ): void {
      callback({ window: { name: windowName }, success: true });
    },
    restore(windowId: string, callback: (result: any) => void): void {
      console.info("Mock restore ");
    },
    maximize(windowId: string, callback: (result: any) => void): void {
      console.info("Mock maximize");
    },
    close(windowId: string, callback: () => void): void {
      console.info("Mock close");
    },
    minimize(windowId: string, callback: (result: any) => void): void {
      console.info("Mock minimize");
    }
  },
  //@ts-ignore
  games: {
    events: {
      onInfoUpdates2: MockGepMethods,
      onNewEvents: MockGepMethods,
      onInfoUpdates: MockGepMethods,
      onError: MockGepMethods,
      setRequiredFeatures: (features, callback) => {
        callback({ success: true, features });
      },
      getInfo: (callback: (payload?: any) => void) => {
        callback();
      }
    },
    onGameInfoUpdated: MockGepMethods,
    inputTracking: {
      onKeyDown: MockCommonMethods,
      onKeyUp: MockCommonMethods,
      onMouseDown: MockCommonMethods,
      onMouseUp: MockCommonMethods,
      getMousePosition: (callback: () => void) => {
        callback();
      },
      getActivityInformation: (callback: () => void) => {
        callback();
      },
      getEyeTrackingInformation: (callback: () => void) => {
        callback();
      },
      getMatchActivityInformation: (
        callback: (activity: overwolf.games.IMatchActivity) => void
      ) => {
        callback({ activity: {}, status: "DEV_BROWSER" });
      },
      pauseEyeTracking: () => {},
      resumeEyeTracking: () => {}
    }
  }
};

export default process.env.NODE_ENV !== "production" &&
  Object.defineProperty(window, "overwolf", {
    writable: true,
    value: overwolfMock
  });
