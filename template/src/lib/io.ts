export const getExtensionRootPath = (uuid: string) =>
  `\\overwolf\\extensions\\${uuid}\\data`;

/**
 * Retrieves the path of the Overwolf extension.
 * @returns A promise that resolves to the path of the extension.
 */
const getExtensionPath = () =>
  new Promise<string>((resolve) => {
    overwolf.extensions.current.getManifest(({ UID }) => {
      const localPath = overwolf.io.paths.localAppData;
      const path = `${localPath}${getExtensionRootPath(UID)}`;
      resolve(path);
    });
  });

/**
 * Retrieves the local app data path with the specified timestamp.
 * @param now The timestamp to be appended to the path.
 * @returns The local app data path with the appended file name.
 */
const getLocalAppData = (fileName: number | string) =>
  new Promise<string>((resolve) => {
    overwolf.extensions.current.getManifest(({ UID }) => {
      const path = `${overwolf.io.paths.localAppData}${getExtensionRootPath(
        UID,
      )}\\${fileName}.json`;
      resolve(path);
    });
  });

/**
 * Retrieves the available file paths in a specified directory.
 * @param path The path of the directory.
 * @returns A promise that resolves to an array of file paths.
 */
const readFilesPathAvailable = <T>(path: string) =>
  new Promise<Array<T>>((resolve) => {
    overwolf.io.dir(path, ({ success, data }) => {
      if (!success && !data?.length) resolve([] as Array<T>);
      const files = data?.filter(({ type }) => type === "file");
      resolve(files as Array<T>);
    });
  });

const getFileSize = (data: string): string => {
  const blob = new Blob([data]);
  return `${Math.floor(blob.size / 1024)}kb`;
};

/**
 * Writes the contents of a file at the specified path using Overwolf's IO API.
 * @param path The path of the file to write.
 * @param data The data to write to the file.
 * @returns A promise that resolves to a message indicating the status of the write operation.
 */
const writeFileContents = <T>(path: string, data: T) =>
  new Promise<string>((resolve) => {
    overwolf.io.writeFileContents(
      path,
      JSON.stringify(data),
      "UTF8" as overwolf.io.enums.eEncoding.UTF8,
      false,
      (status) => {
        if (!status.success) resolve(status.error ?? "Unknown error");
        const message = `Saved in ${path} with status ${status}, data size: ${getFileSize(
          JSON.stringify(data),
        )}`;
        resolve(message);
      },
    );
  });

export {
  getExtensionPath,
  readFilesPathAvailable,
  getLocalAppData,
  writeFileContents,
};
