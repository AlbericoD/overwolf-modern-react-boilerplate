import { WINDOW_NAMES } from "app/shared/constants";
import reduxStore from "app/shared/store";

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
  static simpleRequestInterval(
    interval: number,
    callback: overwolf.CallbackFunction<overwolf.Result>,
  ): void {
    console.info(`Callback interval ${interval}`);
    callback({ success: true });
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
    requestPermissions: (
      callback: overwolf.CallbackFunction<overwolf.Result>,
    ) => {
      callback({ success: true });
    },
    stopRequesting: () => {},
  },
  //@ts-ignore
  settings: {
    language: {
      get: (
        callback: (
          result: overwolf.settings.language.GetLanguageResult,
        ) => void,
      ) => {
        console.info("get language");
        callback({ language: "en", success: true });
      },
      onLanguageChanged: {
        addListener: (
          callback: (
            payload: overwolf.settings.language.LanguageChangedEvent,
          ) => void,
        ) => {
          console.log("onLanguageChanged addListener");
          callback({ language: "en" });
        },
        removeListener: (
          callback: (
            payload: overwolf.settings.language.LanguageChangedEvent,
          ) => void,
        ) => {
          callback({ language: "en" });
        },
      },
    },
  },
  //@ts-ignore
  utils: {
    openUrlInDefaultBrowser: (url: string) => {
      window.open(url);
    },
  },
  //@ts-ignore
  windows: {
    getCurrentWindow(callback: (result: any) => void): void {
      callback({ window: { name: WINDOW_NAMES.BACKGROUND }, success: true });
    },
    //@ts-ignore
    getMainWindow: () => ({ reduxStore }),
    //@ts-ignore
    obtainDeclaredWindow(
      windowName: string,
      callback: (response: any) => void,
    ): void {
      callback({ window: { name: windowName }, success: true });
    },
    //@ts-ignore
    restore(windowId: string, callback: (result: any) => void): void {
      console.info("Mock restore ");
    },
    //@ts-ignore
    maximize(windowId: string, callback: (result: any) => void): void {
      console.info("Mock maximize");
    },
    //@ts-ignore
    close(windowId: string, callback: () => void): void {
      console.info("Mock close");
    }, //@ts-ignore
    minimize(windowId: string, callback: (result: any) => void): void {
      console.info("Mock minimize");
    },
  },
  //@ts-ignore
  games: {
    //@ts-ignore
    events: {
      onInfoUpdates2: MockGepMethods,
      onNewEvents: MockGepMethods,
      onInfoUpdates: MockGepMethods,
      onError: MockGepMethods,
      setRequiredFeatures: (features, callback) => {
        //@ts-ignore
        callback({ success: true, features });
      },
      getInfo: (callback: (payload?: any) => void) => {
        callback();
      },
    },
    getLastRunningGameInfo: (callback) => {
      callback({
        success: true,
      });
    },
    getRunningGameInfo: (callback) => {
      callback({} as any);
    },
    onGameInfoUpdated: MockGepMethods,
    //@ts-ignore
    inputTracking: {
      onKeyDown: MockCommonMethods,
      onKeyUp: MockCommonMethods,
      onMouseDown: MockCommonMethods,
      onMouseUp: MockCommonMethods,
      getMousePosition: (
        callback: overwolf.CallbackFunction<overwolf.games.inputTracking.GetActivityResult>,
      ) => {
        callback({
          success: true,
          activity: {
            aTime: 0,
            apm: 0,
            iTime: 0,
            keyboard: {
              keys: [],
              total: 0,
            },
            mouse: {
              dist: 0,
              keys: 0,
              total: 0,
            },
          },
        });
      },
      getActivityInformation: (
        callback: overwolf.CallbackFunction<overwolf.games.inputTracking.GetActivityResult>,
      ) => {
        callback({
          success: true,
          activity: {
            aTime: 0,
            apm: 0,
            iTime: 0,
            keyboard: {
              keys: [],
              total: 0,
            },
            mouse: {
              dist: 0,
              keys: 0,
              total: 0,
            },
          },
        });
      },
      getEyeTrackingInformation: (
        callback: overwolf.CallbackFunction<overwolf.games.inputTracking.GetActivityResult>,
      ) => {
        callback({
          success: true,
          activity: {
            aTime: 0,
            apm: 0,
            iTime: 0,
            keyboard: {
              keys: [],
              total: 0,
            },
            mouse: {
              dist: 0,
              keys: 0,
              total: 0,
            },
          },
        });
      },
      pauseEyeTracking: () => {},
      resumeEyeTracking: () => {},
    },
  },
};

export default process.env.NODE_ENV !== "production" &&
  Object.defineProperty(window, "overwolf", {
    writable: true,
    value: overwolfMock,
  });
