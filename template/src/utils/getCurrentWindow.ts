export const getCurrentWindow = (): Promise<string> =>
  new Promise((resolve) =>
    overwolf.windows.getCurrentWindow((result) => {
      resolve(result.window.name)
    }),
  )
