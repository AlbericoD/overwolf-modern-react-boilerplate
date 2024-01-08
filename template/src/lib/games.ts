export const HEARTHSTONE_CLASS_ID = 21216;

export function getHearthstoneGame(): Promise<overwolf.games.GetRunningGameInfoResult | null> {
  return new Promise((resolve) => {
    overwolf.games.getRunningGameInfo((result) => {
      resolve(
        result && result.classId === HEARTHSTONE_CLASS_ID ? result : null
      );
    });
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getGameInfo(): Promise<any> {
  return new Promise((resolve, reject) => {
    overwolf.games.events.getInfo((info) => {
      if (info.success) {
        resolve(info.res);
      } else {
        reject(info);
      }
    });
  });
}
