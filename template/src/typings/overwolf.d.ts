declare module overwolf {
  const version: string;

  interface OWEvent {}

  interface ILauncherInfo {
    title: string;
    id: number;
    classId: number;
    isInFocus: boolean;
    position: any;
    handle: number;
    commandLine: string;
    processId: number; // TODO: check if this is right
    path: string;
  }

  namespace io {
    /**
     * Checks for the existance of the file in the given path.
     * @param filePath The path to check for.
     * @param callback Returns with the result.
     */
    function fileExists(
      filePath: string,
      callback: (status: string, found: boolean) => void
    ): void;

    /**
     * Writes the content to the target file. If the file doesn't exist, it will be created, along with any needed directories along the path. Otherwise, the file's content will be overwritten.
     * @param filePath The full path of the file to write to.
     * @param content The content to write.
     * @param encoding The encoding to use, see more at
     * @param triggerUacIfRequired If additional permissions are required, allows the triggering of the Windows UAC dialog.
     * @param callback Called with the status of the request.
     */
    function writeFileContents(
      filePath: string,
      content: string,
      encoding: any,
      triggerUacIfRequired: boolean,
      callback: (status: string) => void
    ): void;

    /**
     * Read the content to the target file.
     * @param filePath The full path of the file to write to.
     * @param encoding The encoding to use, see more at
     * @param callback Called with the status of the request and the file contect.
     */
    function readFileContents(
      filePath: string,
      encoding: any,
      callback: (status: string, message: string) => void
    ): void;

    /**
     * Copy a file from the local extension directory to a destination on the localmachine
     * @param src a relative (to the root of your extension's folder) file path or a full overwolf-extension:// URI to the source file to be copied
     * @param dst The destination path (including filename) to copy to.
     * @param overrideFile true if you want an existing file to be overriden, false otherwise.
     * @param reserved for future use.
     * @param callback result callback.
     */
    function copyFile(
      src: string,
      dst: string,
      overrideFile: boolean,
      reserved: boolean,
      callback: () => void
    ): void;

    namespace enums {
      const enum eEncoding {
        UTF8,
        UTF8BOM,
        Unicode,
        UnicodeBOM,
        ASCII
      }

      const enum eTobiiEffectType {
        Default,
        Bubble,
        Solid,
        Inverted
      }
    }
  }

  namespace media {
    /**
     * Takes a screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the screenshots folder.
     * @param callback A function called after the screenshot was taken.
     */
    function takeScreenshot(callback: () => void): void;

    /**
     * Takes a screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the screenshots folder.
     * @param targetFolder Target screen shot folder path.
     * @param callback A function called after the screenshot was taken.
     */
    function takeScreenshot(targetFolder: string, callback: () => void): void;

    /**
     * Takes a window screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the screenshots folder.
     * @param windowHandle The window Name
     * @param postMediaEvent set true to posr media event (onMediaEvent)
     * @param targetFolder set target folder path to screen shot
     * @param callback A function called after the screenshot was taken.
     */
    function takeWindowsScreenshotByHandle(
      windowHandle: number,
      postMediaEvent: boolean,
      targetFolder: string,
      callback: () => void
    ): void;

    /**
     * Takes a window screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the screenshots folder.
     * @param windowHandle The window Name
     * @param postMediaEvent set true to posr media event (onMediaEvent)
     * @param callback A function called after the screenshot was taken.
     */
    function takeWindowsScreenshotByHandle(
      windowHandle: number,
      postMediaEvent: boolean,
      callback: () => void
    ): void;

    /**
     * Takes a window screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the screenshots folder.
     * @param windowName The window Name
     * @param postMediaEvent set true to posr media event (onMediaEvent)
     * @param targetFolder set target folder path to screen shot
     * @param callback A function called after the screenshot was taken.
     */
    function takeWindowsScreenshotByName(
      windowName: string,
      postMediaEvent: boolean,
      targetFolder: string,
      callback: () => void
    ): void;

    /**
     * Takes a window screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the screenshots folder.
     * @param windowName The window Name
     * @param postMediaEvent set true to posr media event (onMediaEvent)
     * @param callback A function called after the screenshot was taken.
     */
    function takeWindowsScreenshotByName(
      windowName: string,
      postMediaEvent: boolean,
      callback: () => void
    ): void;

    /**
     * Takes a memory screenshot and calls the callback with the success status and the screenshot URL. The screenshot will only be placed in the memory and will not be saved to a file (better performance). Can only be used while in a game.
     * @param screenshotParams A JSON containing the parameters of the screenshot.
     * @param callback A function called after the screenshot was taken.
     */
    function getScreenshotUrl(
      screenshotParams: any,
      callback: (result: any) => void
    ): void;

    /**
     * Opens the social network sharing console to allow the user to share a picture.
     * @param image A URL or image object to be shared.
     * @param description The description to be used when posting to social networks.
     * @param callback A function called after the image was shared.
     */
    function shareImage(
      image: any,
      description: string,
      callback: () => void
    ): void;

    /**
     * Posts a media event for other apps to receive. The time info should be received in UTC format.
     * @param mediaType The type of the event. See
     * @param jsonInfo A json with additional info about the event.
     * @param callback A callback with the status if the call.
     */
    function postMediaEvent(
      mediaType: any,
      jsonInfo: any,
      callback: () => void
    ): void;

    /**
     * Deletes all gifs created by this app with an option to keep the newest X GBs (use with care).
     * @param keepNewestXGbs Keep the newest X GBs of gifs. Pass 0 to delete all gifs.
     * @param callback A callback function which will be called with the status of the request.
     */
    function deleteOldGifs(keepNewestXGbs: number, callback: () => void): void;

    /**
     * Returns the total size of the gif files created by this app in gigabytes.
     * @param callback A callback with the gifs size.
     */
    function getGifsSize(callback: () => void): void;

    /**
     * Returns the total size of the video capture folder created by the app. This includes all video/thumbnail and other filesthat are under the apps video folder - which is locatedinside the configured Overwolf video capture folder.NOTE: this function can take a long time to return if the foldercontains a large amount of files (on some computers) - therefore,try to reduce the amount of times you call it
     * @param callback A callback with the size in MB.
     */
    function getAppVideoCaptureFolderSize(callback: () => void): void;

    /**
     * Similar to |getAppVideoCaptureFolderSize| but looks at the appsscreen capture folder.
     * @param callback A callback with the size in MB.
     */
    function getAppScreenCaptureFolderSize(callback: () => void): void;

    /**
     * Fired when a media event has been posted.
     */
    abstract class onMediaEvent implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when a screenshot was taken.
     */
    abstract class onScreenshotTaken implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
         * {
      "summary": "See overwolf.media.replays"
    }
         */
    abstract class onGifGenerationError implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    namespace enums {
      const enum eMediaType {
        Video,
        Image
      }

      const enum eStretch {
        None,
        Fill,
        Uniform,
        UniformToFill
      }
    }

    namespace audio {
      /**
       * Creates an audio file from local path, extension local path or a remote Url.
       * @param url The path of a local audio file, a url to a remote one or an extension url (overwolf-extension://app-id/file). Notice that if the url doesn't contain a file extension, mp3 will be assumed as the extension.
       * @param callback A callback function which will be called with the ID of the created audio file.
       */
      function create(url: string, callback: () => void): void;

      /**
       * Plays the audio file matching the supplied ID.
       * @param id The ID of the audio file to be played.
       * @param callback A callback function which will be called with the status of the play request.
       */
      function play(id: string, callback: () => void): void;

      /**
       * Stops the playback.
       * @param callback A callback function which will be called with the status of the stop request.
       */
      function stop(callback: () => void): void;

      /**
       * Stops the playback.
       * @param id The ID of the audio file.
       * @param callback A callback function which will be called with the status of the stop request.
       */
      function stopById(id: string, callback: () => void): void;

      /**
       * Pauses the playback.
       * @param callback A callback function which will be called with the status of the pause request.
       */
      function pause(callback: () => void): void;

      /**
       * Pauses the playback of a specific sound.
       * @param id The ID of the audio file.
       * @param callback A callback function which will be called with the status of the pause request.
       */
      function pauseById(id: string, callback: () => void): void;

      /**
       * Resumes the playback.
       * @param callback A callback function which will be called with the status of the resume request.
       */
      function resume(callback: () => void): void;

      /**
       * Resumes the playback of a specific file.
       * @param id The ID of the audio file.
       * @param callback A callback function which will be called with the status of the resume request.
       */
      function resumeById(id: string, callback: () => void): void;

      /**
       * Sets the playback volume.
       * @param volume The desired volume. The volume range is 0 - 100 where a volume of 0 means mute.
       * @param callback A callback function which will be called with the status of the stop request.
       */
      function setVolume(volume: number, callback: () => void): void;

      /**
       * Sets the playback volume of a specific file.
       * @param id The ID of the audio file.
       * @param volume The desired volume. The volume range is 0 - 100 where a volume of 0 means mute.
       * @param callback A callback function which will be called with the status of the stop request.
       */
      function setVolumeById(
        id: string,
        volume: number,
        callback: () => void
      ): void;

      /**
       * Fired when the state of the playback is changed.
       */
      abstract class onPlayStateChanged implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }
    }

    namespace videos {
      /**
       * Creates a compilation video out of a source video and a list of segments..
       * @param sourceVideoUrl The url of the source video in an overwolf://media form.
       * @param segments A JSON containing a list of segments, each segment has a start time and an end time in milliseconds. The segments must be sorted in acsending order. Example:{ "segments": [ { "startTime": 2000, "endTime": 4000 }, { "startTime": 8000, "endTime": 10000 }, { "startTime": 14000, "endTime": 18000 } ]}
       * @param callback A callback function which will be called with the status of the request and the url to the target video.
       */
      function createVideoComposition(
        sourceVideoUrl: string,
        segments: any,
        callback: () => void
      ): void;

      /**
       * Creates a compilation video out of a source video and a list of segments..
       * @param files list of files to ccomposit to output video file (overwolf://media form. or file:///)
       * @param outputFile the file output name
       * @param callback A callback function which will be called with the status of the request and the url to the target video.
       */
      function createVideoCompositionFiles(
        files: string,
        outputFile: string,
        callback: () => void
      ): void;

      /**
       * Gets a list of all of the videos created by this app.
       * @param callback A callback function which will be called with the status of the request.
       */
      function getVideos(callback: () => void): void;

      /**
       * Returns the total size of the video files created by this app in gigabytes.
       * @param callback A callback with the videos size.
       */
      function getVideosSize(callback: () => void): void;

      /**
       * Deletes all videos created by this app with an option to keep the newest X GBs (use with care).
       * @param keepNewestXGbs Keep the newest X GBs of videos. Pass 0 to delete all videos.
       * @param callback A callback function which will be called with the status of the request.
       */
      function deleteOldVideos(
        keepNewestXGbs: number,
        callback: () => void
      ): void;

      /**
       * Deletes a specific video created by this app.
       * @param videoUrl The Overwolf URL of the video to delete.
       * @param callback A callback function which will be called with the status of the request.
       */
      function deleteVideo(videoUrl: string, callback: () => void): void;
    }

    namespace replays {
      /**
       * Turns off background replay capturing. Call this as soon as you no longer interesting in capturing, in order to free up resources.
       * @param callback A callback function which will be called with the status of the request.
       */
      function turnOff(callback: () => void): void;

      /**
       * Turns on background replay capturing. Without calling it first, you will not be able to create video replays. Notice that turning on replay capturing will consume system resources so use it wisely.buffer_length defines the amount of time in milliseconds to have captured in the memory at all times.
       * @param settings The video capture settings. A JSON file which can consist any of the following:{ "settings": {//Choose video or gif "video": { "buffer_length": 20000 }, "audio": { "mic": { "volume": 100, "enabled": true }, "game": { "volume": 75, "enabled": true } }, "peripherals": { "capture_mouse_cursor": "both" } }}For more information about this JSON, see
       * @param callback A callback function which will be called with the status of the request.
       */
      function turnOn(settings: any, callback: () => void): void;

      /**
       * Returns whether replay capturing is turned on or off.
       * @param callback A callback function which will be called with the status of the request.
       */
      function getState(callback: () => void): void;

      /**
       * Returns whether replay capturing is turned on or off.
       * @param replayType The type of replay to get state for.
       * @param callback A callback function which will be called with the status of the request.
       */
      function getState(replayType: any, callback: () => void): void;

      /**
       * Starts capturing a replay to a file. A replay id will be returned in the callback which is needed to finish capturing the replay. You can only call this method if replay mode is on and no other replay is currently being captured to a file.
       * @param pastDuration The replay lengh, in milliseconds to include prior to the time of this call.
       * @param futureDuration The replay lengh, in milliseconds to include after the time of this call. To ignore it, simply give it a non-positive value
       * @param captureFinishedCallback A callback function which will be called when capturing is finished, at the end of the future duration supplied to this call.
       * @param callback A callback function which will be called with the status of the request.
       */
      function capture(
        pastDuration: number,
        futureDuration: number,
        captureFinishedCallback: () => void,
        callback: () => void
      ): void;

      /**
       * Starts capturing a replay to a file. A replay id will be returned in the callback which is needed to finish capturing the replay. You can only call this method if replay mode is on and no other replay is currently being captured to a file.
       * @param replayType The type of replay to capture.
       * @param pastDuration The replay lengh, in milliseconds to include prior to the time of this call.
       * @param futureDuration The replay lengh, in milliseconds to include after the time of this call. To ignore it, simply give it a non-positive value
       * @param captureFinishedCallback A callback function which will be called when capturing is finished, at the end of the future duration supplied to this call.
       * @param callback A callback function which will be called with the status of the request.
       */
      function capture(
        replayType: any,
        pastDuration: number,
        futureDuration: number,
        captureFinishedCallback: () => void,
        callback: () => void
      ): void;

      /**
       * Starts capturing a replay to a file. A replay id will be returned in the callback which is needed to finish capturing the replay. You can only call this method if replay mode is on and no other replay is currently being captured to a file.
       * @param pastDuration The video lengh, in milliseconds to include prior to the time of this call.
       * @param callback A callback function which will be called with the status of the request.
       */
      function startCapture(pastDuration: number, callback: () => void): void;

      /**
       * Starts capturing a replay to a file. A replay id will be returned in the callback which is needed to finish capturing the replay. You can only call this method if replay mode is on and no other replay is currently being captured to a file.
       * @param replayType The type of replay to capture.
       * @param pastDuration The video lengh, in milliseconds to include prior to the time of this call.
       * @param callback A callback function which will be called with the status of the request.
       */
      function startCapture(
        replayType: any,
        pastDuration: number,
        callback: () => void
      ): void;

      /**
       * Finishes capturing a replay and returns a url to the created video file. You can only call this method if replay mode is on and using a valid id of a replay being captured to a file.
       * @param replayId The id of the replay you want to finish capturing.
       * @param callback A callback function which will be called with the status of the request.
       */
      function stopCapture(replayId: string, callback: () => void): void;

      /**
       * Finishes capturing a replay and returns a url to the created video file. You can only call this method if replay mode is on and using a valid id of a replay being captured to a file.
       * @param replayType The type of replay to stop capture.
       * @param replayId The id of the replay you want to finish capturing.
       * @param callback A callback function which will be called with the status of the request.
       */
      function stopCapture(
        replayType: any,
        replayId: string,
        callback: () => void
      ): void;

      /**
       * change target sub folder of current running replay provider
       * @param replayType The type of replay to stop capture.
       * @param subFolderName the new sub folder name
       * @param callback A callback function which will be called with the status of the request.
       */
      function setReplaysSubFolder(
        replayType: any,
        subFolderName: string,
        callback: () => void
      ): void;

      /**
             * Update Tobii streaming layer.
             * @param param The Tobii layer visibilty param.
             * @param callback [
       "A function that will be called with a JSON containing the status\r\n and the stream id if successful:\r\n ",
       "\r\n or an error message if not:\r\n "
      ]
             */
      function updateTobiiSetting(param: any, callback: () => void): void;

      /**
       * Fired when an error has occurred with the capturing.
       */
      abstract class onCaptureError implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Fired when replay service is stopped.
       */
      abstract class onCaptureStopped implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Fired on capture service warning.
       */
      abstract class onCaptureWarning implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Fired when an replay serive is on (any other app);
       */
      abstract class onReplayServicesStarted implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      namespace enums {
        const enum ReplayType {
          video,
          gif
        }
      }
    }
  }

  namespace profile {
    /**
     * Calls the given callback with the currently logged-in Overwolf user.
     * @param callback A function called with the current user, or an error.
     */
    function getCurrentUser(callback: (profile: any) => void): void;

    /**
     * Opens the login dialog.
     */
    function openLoginDialog(): void;

    /**
         * {
      "example": {
        "code": {
          "@lang": "javascript",
          "#text": "{\r\n status: \"success\",\r\n connectionState: \"Online\", // can be \"Online\", \"Offline\", \"Connecting\", etc.\r\n username: \"...\" // when the status is other than \"Offline\", will be the currently connected username.\r\n }"
        }
      },
      "summary": "Fired when a user logged in or logged out, with the following structure:"
    }
         */
    abstract class onLoginStateChanged implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }
  }

  namespace windows {
    /**
     * Calls the given callback function with the current window object as a parameter.
     * @param callback A callback function which will be called with the current window object as a parameter. See
     */
    function getCurrentWindow(callback: (result: any) => void): void;

    /**
     * Creates or returns a window by the window name that was declared in the manifest.
     * @param windowName The name of the window that was declared in the data.windows section in the manifest.
     * @param callback A callback function which will be called with the requested window as a parameter. See
     */
    function obtainDeclaredWindow(
      windowName: string,
      callback: (response: any) => void
    ): void;

    /**
     * Start dragging a window.
     * @param windowId The id or name of the window to drag.
     * @param callback A callback which is called when the drag is completed.
     */
    function dragMove(windowId: string, callback?: (result: any) => void): void;

    /**
     * Start resizing the window from a specific edge or corner.
     * @param windowId The id or name of the window to resize.
     * @param edge The edge or corner from which to resize the window.
     */
    function dragResize(windowId: string, edge: any): void;

    /**
     * Start resizing the window from a specific edge or corner.
     * @param windowId The id or name of the window to resize.
     * @param edge The edge or corner from which to resize the window.
     * @param contentRect The real content of the window (for the ingame drwing resizing white area)
     */
    function dragResize(windowId: string, edge: any, contentRect: any): void;

    /**
     * Changes the window size to the new width and height, in pixels.
     * @param windowId The id or name of the window for which to change the size.
     * @param width The new window width in pixels.
     * @param height The new window height in pixels.
     * @param callback A callback which is called when the size change is completed.
     */
    function changeSize(
      windowId: string,
      width: number,
      height: number,
      callback: (result: any) => void
    ): void;

    /**
     * Changes the window position in pixels from the top left corner.
     * @param windowId The id or name of the window for which to change the position.
     * @param left The new window position on the X axis in pixels from the left.
     * @param top The new window position on the Y axis in pixels from the top.
     * @param callback A callback which is called when the position change is completed.
     */
    function changePosition(
      windowId: string,
      left: number,
      top: number,
      callback: (result: any) => void
    ): void;

    /**
     * Closes the window.
     * @param windowId The id or name of the window to close.
     * @param callback Called after the window is closed.
     */
    function close(windowId: string, callback: () => void): void;

    /**
     * Minimizes the window.
     * @param windowId The id or name of the window to minimize.
     * @param callback Called after the window is minimized.
     */
    function minimize(windowId: string, callback: (result: any) => void): void;

    /**
     * Hides the window.
     * @param windowId The id or name of the window to hide.
     * @param callback Called after the window is hidden.
     */
    function hide(windowId: string, callback: () => void): void;

    /**
     * Maximizes the window.
     * @param windowId The id or name of the window to maximize.
     * @param callback Called after the window is maximized.
     */
    function maximize(windowId: string, callback: (result: any) => void): void;

    /**
     * Restores a minimized window.
     * @param windowId The id or name of the window to restore.
     * @param callback Called after the window is restored.
     */
    function restore(windowId: string, callback: (result: any) => void): void;

    /**
     * Returns the state of the window (normal/minimized/maximized/closed).
     * @param windowId The id or name of the window.
     * @param callback Called with the window state.
     */
    function getWindowState(windowId: string, callback: () => void): void;

    /**
     * Returns the state of all windows owned by the app (normal/minimized/maximized/closed).
     * @param callback Called with an array containing the states of the windows.
     */
    function getWindowsStates(callback: () => void): void;

    /**
     * Sends a message to an open window.
     * @param windowId The id or name of the window to send the message to.
     * @param messageId A message id.
     * @param messageContent The content of the message.
     * @param callback Called with the status of the request
     */
    function sendMessage(
      windowId: string,
      messageId: string,
      messageContent: any,
      callback: () => void
    ): void;

    /**
     * Returns an array of all open windows as objects. The objects can be manipulated like anyother window.
     * @param callback A callback function which will be called with a map object of (window-name, Window Object) items
     */
    function getOpenWindows(callback: () => void): void;

    /**
     * Returns a window object of the index page.
     */
    function getMainWindow(): Window & { reduxStore: any };

    /**
     * Opens the options page specified in the manifest file. Does nothing if no such page has been specified.
     * @param callback
     */
    function openOptionsPage(callback: () => void): void;

    /**
     * Add Window In Game styling
     * @param windowId The id or name of the window to send the message to.
     * @param style The style to add : overwolf.windows.enum.WindowStyle
     * @param callback Called with the status of the request
     */
    function setWindowStyle(
      windowId: string,
      style: any,
      callback: () => void
    ): void;

    /**
     * Remove Window In Game Styling
     * @param windowId The id or name of the window to send the message to.
     * @param style The style to add : overwolf.windows.enum.WindowStyle
     * @param callback Called with the status of the request
     */
    function removeWindowStyle(
      windowId: string,
      style: any,
      callback: () => void
    ): void;

    /**
     * Sets whether the window should be injected to games or not.
     * @param windowId
     * @param shouldBeDesktopOnly
     * @param callback
     */
    function setDesktopOnly(
      windowId: string,
      shouldBeDesktopOnly: boolean,
      callback: () => void
    ): void;

    /**
     * Sets whether the window should have minimize/restore animations while in game.
     * @param windowId
     * @param shouldEnableAnimations
     * @param callback
     */
    function setRestoreAnimationsEnabled(
      windowId: string,
      shouldEnableAnimations: boolean,
      callback: () => void
    ): void;

    /**
     * Change the window's topmost status. Handle with care as topmost windows can negatively impact user experience.
     * @param windowId
     * @param shouldBeTopmost
     * @param callback
     */
    function setTopmost(
      windowId: string,
      shouldBeTopmost: boolean,
      callback: () => void
    ): void;

    /**
     * Sends the window to the back.
     * @param windowId The id or name of the window.
     * @param callback Called with the result of the request.
     */
    function sendToBack(windowId: string, callback: () => void): void;

    /**
     * Brings the requested window to the front.
     * @param windowId The id or name of the window.
     * @param callback Called with the result of the request.
     */
    function bringToFront(windowId: string, callback: () => void): void;

    /**
     * Brings this window to the front.
     * @param callback Called with the result of the request.
     */
    function bringToFront(callback: () => void): void;

    /**
     * Displays a customized popup message prompt.
     * @param messageParams The type and texts that the message prompt will have.
     * @param callback The user action.
     */
    function displayMessageBox(messageParams: any, callback: () => void): void;

    /**
     * Set current window Mute state.
     * @param mute window mute (on\off).
     * @param callback Called with the result of the request.
     */
    function setMute(mute: boolean, callback: () => void): void;

    /**
     * Mute all sound source include all excluded white list
     * @param callback Called with the result of the request.
     */
    function muteAll(callback: () => void): void;

    /**
     * Is window muted.
     * @param callback Called with the result of the request ({"muted": nool}).
     */
    function isMuted(callback: () => void): void;

    /**
     * Is window fully visible to user (has overlap windows)
     * @param callback Called with the result of the request:{"status": "error" "reason": thereson} or{"status": "success" "visible": "hidden" | "fully" | "partial"}
     */
    function isWindowVisibleToUser(callback: () => void): void;

    /**
     * Get Window DPI.
     * @param callback Called with the result of the request (result e.g: {dpi: 120, scale: 1.25}).
     */
    function getWindowDPI(callback: () => void): void;

    /**
     * Fired when the main window is restored.
     */
    abstract class onMainWindowRestored implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when the state of a window is changed.
     */
    abstract class onStateChanged implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when this window received a message.
     */
    abstract class onMessageReceived implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when out of process iframe crashed.
     */
    abstract class onIsolatedIframeProcessCrashed implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when the user was prevented from closing a window using Alt+F4
     */
    abstract class onAltF4Blocked implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    namespace enums {
      const enum WindowStyle {
        InputPassThrough
      }

      const enum WindowDragEdge {
        None,
        Left,
        Right,
        Top,
        Bottom,
        TopLeft,
        TopRight,
        BottomLeft,
        BottomRight
      }
    }

    namespace realSense {
      /**
       * Returns the versions of camera drivers, installed sdk components and minimal required version.
       * @param callback Called with the versions.
       */
      function getDcmVersions(callback: () => void): void;

      /**
       * Checks whether the correct SDKs are installed and that compatible hardware is found.
       * @param callback A true/false answer (isSupported).
       */
      function hasRequiredSdkAndHardware(callback: () => void): void;

      /**
       * Checks whether RealSense is supported.
       * @param callback
       */
      function isSupported(callback: () => void): void;

      /**
       * Initializes RealSense - this call will fail if no proper driver/hardware exists. Upon a successful invocation, will add a RealSense control stretched on top of the window.
       * @param callback
       */
      function init(callback: () => void): void;

      /**
       * Stops using RealSense.
       */
      function stop(): void;
    }

    namespace mediaPlayerElement {
      /**
       * Creates a media player a places it in the given location with given dimensions.
       * @param x The top position of the player.
       * @param y The left position of the player.
       * @param width The width of the player.
       * @param height The height of the player.
       * @param callback A callback function which will be called with the status of the request.
       */
      function create(
        x: number,
        y: number,
        width: number,
        height: number,
        callback: () => void
      ): void;

      /**
       * Remove all media players created for this window.
       */
      function removeAllPlayers(): void;

      /**
       * Relocates the media player to a given location with given dimensions.
       * @param id The id of the player.
       * @param x The top position of the player.
       * @param y The left position of the player.
       * @param width The width of the player.
       * @param height The height of the player.
       * @param callback A callback function which will be called with the status of the request.
       */
      function setBounds(
        id: number,
        x: number,
        y: number,
        width: number,
        height: number,
        callback: () => void
      ): void;

      /**
       * Sets the current video to be played.
       * @param id The id of the player.
       * @param videoUrl An url to the video.
       * @param callback A callback function which will be called with the status of the request. If successful, the callback will contain the total seconds in the video.
       */
      function setVideo(
        id: number,
        videoUrl: string,
        callback: () => void
      ): void;

      /**
       * Plays the current video.
       * @param id The id of the player.
       * @param callback A callback function which will be called with the status of the request.
       */
      function play(id: number, callback: () => void): void;

      /**
       * Set Tobii replay layer params.
       * @param id The id of the player.
       * @param param The Tobii layer params
       * @param callback A callback function which will be called with the status of the request.
       */
      function setTobiiLayer(
        id: number,
        param: any,
        callback: () => void
      ): void;

      /**
       * Set Tobii replay layer params for the default player.
       * @param param The Tobii layer params
       * @param callback A callback function which will be called with the status of the request.
       */
      function setTobiiLayer(param: any, callback: () => void): void;

      /**
       * Pauses the current video.
       * @param id The id of the player.
       * @param callback A callback function which will be called with the status of the request.
       */
      function pause(id: number, callback: () => void): void;

      /**
       * Resumes the current video.
       * @param id The id of the player.
       * @param callback A callback function which will be called with the status of the request.
       */
      function resume(id: number, callback: () => void): void;

      /**
       * Sets the volume.
       * @param id The id of the player.
       * @param volume A volume between 0 and 100 (inclusive).
       * @param callback A callback function which will be called with the status of the request.
       */
      function setVolume(
        id: number,
        volume: number,
        callback: () => void
      ): void;

      /**
       * Stops the current video.
       * @param id The id of the player.
       * @param callback A callback function which will be called with the status of the request.
       */
      function stop(id: number, callback: () => void): void;

      /**
       * Seeks the current video to the given number of seconds.
       * @param id The id of the player.
       * @param seconds The numbers of seconds to seek to.
       * @param callback A callback function which will be called with the status of the request.
       */
      function seek(id: number, seconds: number, callback: () => void): void;

      /**
       * Gets the current progress, in seconds, of the playback.
       * @param id The id of the player.
       * @param callback A callback function which will be called with the status of the request.
       */
      function getProgress(id: number, callback: () => void): void;

      /**
       * Sets the speed ratio of the playback.
       * @param id The id of the player.
       * @param speedRatio The speed ratio of the playback. A double between 0 and 16 (inclusive).
       * @param callback A callback function which will be called with the status of the request.
       */
      function setPlaybackSpeed(
        id: number,
        speedRatio: number,
        callback: () => void
      ): void;

      /**
       * Sends the media player to the front of the window.
       * @param id The id of the player.
       * @param callback A callback function which will be called with the status of the request.
       */
      function toFront(id: number, callback: () => void): void;

      /**
       * Sends the media player to the back of the window.
       * @param id The id of the player.
       * @param callback A callback function which will be called with the status of the request.
       */
      function toBack(id: number, callback: () => void): void;

      /**
       * Sets the stretch mode of the player.
       * @param id The id of the media player.
       * @param stretchMode The desired stretch mode, see
       * @param callback A callback function which will be called with the status of the request.
       */
      function setStretchMode(
        id: number,
        stretchMode: any,
        callback: () => void
      ): void;

      /**
       * Fired when playback is starting/resuming.
       */
      abstract class onPlaybackStarted implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Fired when playback is paused.
       */
      abstract class onPlaybackPaused implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Fired when playback is stopped.
       */
      abstract class onPlaybackStopped implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Fired when playback ends.
       */
      abstract class onPlaybackEnded implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Fired when there was an error while trying to open a video.
       */
      abstract class onPlaybackError implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }
    }
  }

  namespace benchmarking {
    /**
         * {
      "summary": "Requests hardware information within a given interval. Note that this call requires Overwolf to have Administrative permissions. If it does not have it, the callback will return with 'Permissions Required'. You will then have to ask the app user for permissions and according to the user's choice, call . It is then required to call again."
    }
         * @param interval The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms.
         * @param callback A callback function which will be called with the status of the request.
         */
    function requestHardwareInfo(interval: number, callback: () => void): void;

    /**
         * {
      "summary": "Requests process information within a given interval. See overwolf.benchmarking for administrative permissions instructions."
    }
         * @param interval The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms.
         * @param callback A callback function which will be called with the status of the request.
         */
    function requestProcessInfo(interval: number, callback: () => void): void;

    /**
     * Requests game fps information within a given interval.
     * @param interval The desired maximal interval (in milliseconds) in which events will be triggered.
     * @param callback A callback function which will be called with the status of the request.
     */
    function requestFpsInfo(interval: number, callback: () => void): void;

    /**
     * Stops receiving hardware/process events. Use this when you no longer want to receive events or when you close your app.
     */
    function stopRequesting(): void;

    /**
     * In case Overwolf requires administrative permissions, and after prompting the user of the app to request more permissions, call this function and then request your desired benchmarking information.
     * @param callback A callback function which will be called with the status of the request.
     */
    function requestPermissions(callback: () => void): void;

    /**
     * Fired when hardware infromation is ready with a JSON containing the information.
     */
    abstract class onHardwareInfoReady implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when process infromation is ready with a JSON containing the information.
     */
    abstract class onProcessInfoReady implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when fps infromation is ready with a JSON containing the information.
     */
    abstract class onFpsInfoReady implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }
  }

  namespace games {
    /**
     * Returns an object with information about the currently running game (or active games, if more than one), or null if no game is running.
     * @param callback Called with the currently running or active game info. See
     */
    function getRunningGameInfo(callback: (runningGameInfo: any) => void): void;

    /**
     * Returns information about a game with a given game id.Will only return information if the game is detected on the local machine (i.e. installed)
     * @param gameClassId The class id of the game.
     * @param callback Called with the info about the game.
     */
    function getGameInfo(gameClassId: number, callback: () => void): void;

    /**
     * This is the same as getGameDBInfo, except that it can return twodifferent results: 1. if the game is detected as installed - then the |installedGameInfo| member of the result will be set and the |gameInfo| member will be null 2. if the game is NOT detected as installed, then the |installedGameInfo| member of the result will be set to null and the |gameInfo| member will be set NOTE: |installedGameInfo| contains |gameInfo| in it
     * @param gameClassId The class id of the game.
     * @param callback Called with the info about the game.
     */
    function getGameDBInfo(gameClassId: number, callback: () => void): void;

    /**
     * Returns an array of the maxNumOfGames most recently played game IDs.An empty array will be returned if none have been recorded.
     * @param maxNumOfGames The maximum number of games to recieve.
     * @param callback Called with the array of game IDs.
     */
    function getRecentlyPlayedGames(
      maxNumOfGames: number,
      callback: () => void
    ): void;

    /**
         * {
      "summary": "Fired when the game info is updated, including game name, game running, game terminated, game changing focus, etc. Passes a GameInfoChangeData object."
    }
         */
    abstract class onGameInfoUpdated implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when a game is launched.
     */
    abstract class onGameLaunched implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
         * {
      "code": {
        "@lang": "javascript",
        "#text": "{\r\n \"fps_status\": \"Increase\",\r\n \"fps\": 35\r\n }"
      },
      "summary": "[\r\n \"\\r\\n Fired when the rendering frame rate of the currently injected game changes dramatically:\\r\\n \",\r\n \"\\r\\n The \\\"fps_status\\\" field can be \\\"None\\\", \\\"Stable\\\", \\\"Drop\\\" and \\\"Increase\\\".\\r\\n \"\r\n]"
    }
         */
    abstract class onMajorFrameRateChange implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     *
     */
    abstract class onGameRendererDetected implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    namespace launchers {
      interface GetRunningLaunchersInfoResult {
        launchers: ILauncherInfo[];
      }

      /**
       * Returns an object with information about the currently running launchers
       * @param callback Called with the currently running detected launchers. See
       */
      function getRunningLaunchersInfo(
        callback: (result: GetRunningLaunchersInfoResult) => void
      ): void;

      /**
             * {
        "summary": "Fired when the launcher info is updated, including game name, game running, game terminated, game changing focus, etc. Passes a ILauncherInfo object."
      }
             */
      abstract class onUpdated implements OWEvent {
        static addListener(callback: (info: ILauncherInfo) => void): void;
        static removeListener(callback: (info: ILauncherInfo) => void): void;
      }

      /**
       * Fired when a game is launched.
       */
      abstract class onLaunched implements OWEvent {
        static addListener(callback: (info: ILauncherInfo) => void): void;
        static removeListener(callback: (info: ILauncherInfo) => void): void;
      }

      /**
       * Fired when a launcher is closed.
       */
      abstract class onTerminated implements OWEvent {
        static addListener(callback: (info: ILauncherInfo) => void): void;
        static removeListener(callback: (info: ILauncherInfo) => void): void;
      }
    }

    namespace events {
      /**
       * Sets the required features from the provider.
       * @param features A string array of features to utilize.
       * @param callback Called with success or failure state.
       */
      function setRequiredFeatures(
        features: string[],
        callback: (result: any) => void
      ): void;

      /**
       * Gets the current game info.
       * @param callback
       */
      function getInfo(callback: (payload?: any) => void): void;

      /**
       * Fired when there was an error in the game events system.
       */
      abstract class onError implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Obsolete. Fired when there are game info updates with a JSON object of the updates.
       */
      abstract class onInfoUpdates implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Fired when there are game info updates with a JSON object of the updates.
       */
      abstract class onInfoUpdates2 implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Fired when there are new game events with a JSON object of the events information.
       */
      abstract class onNewEvents implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }
    }
    interface IMatchActivity {
      status: string;
      activity: {};
    }
    namespace inputTracking {
      /**
       * Returns the input activity information. The information includes presses for keyboard/mouse, total session time, idle time and actions-per-minute. This information resets between game executions.
       * @param callback A callback with the activity information.
       */
      function getActivityInformation(callback: () => void): void;

      /**
       * Returns the input activity information (similar to |getActivityInformation|,however, when this is supported, it will return data only for the latestmatch of the current game
       * @param callback A callback with the activity information.
       */
      function getMatchActivityInformation(
        callback: (activity: IMatchActivity) => void
      ): void;

      /**
       * Returns the eye tracking information. The information includes gaze points, fixations, user presence (screen/keyboard/other) and minimap glances. This information resets between game executions.
       * @param callback A callback with the eye tracking information
       */
      function getEyeTrackingInformation(callback: () => void): void;

      /**
       * Returns the input last mouse position in game. the data includes the mouse position and a boolean stating whether the keypress was on a game or on an Overwolf widget (onGame)
       * @param callback A callback with the mouse position information
       */
      function getMousePosition(callback: () => void): void;

      /**
       * Eye tracking data trakcing will pause, and stop collect Eye tracking data until resumeEyeTracking will be called.
       */
      function pauseEyeTracking(): void;

      /**
       * Resume collecting Eye tracking data.
       */
      function resumeEyeTracking(): void;

      /**
       * Fired when a keyboard key has been released.The event information includes the virtual key code (key) and a boolean stating whether the keypress was on a game or on an Overwolf widget (onGame)
       */
      abstract class onKeyUp implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
             * {
        "summary": "Fired when a keyboard key has been pressed.Event information is similar to"
      }
             */
      abstract class onKeyDown implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Fired when a mouse key has been released.The event information includes whether the left or white mouse button was clicked(button), x and y coordinates (x, y) and a boolean stating whether the keypress was on a game or on an Overwolf widget (onGame)
       */
      abstract class onMouseUp implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
             * {
        "summary": "Fired a mouse key has been pressed.Event information is similar to"
      }
             */
      abstract class onMouseDown implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }
    }
  }

  namespace web {
    /**
         * {
      "summary": "Creates a web server. This call returns an object with two fields: A status string and a server object. The server objectis of type"
    }
         * @param port The port to use.
         * @param callback 
         */
    function createServer(port: number, callback: () => void): void;

    namespace webserver {
      /**
       * Listens for requests on the given port. If the port is already in use, or this instance is already listening, an error will be returned.
       * @param callback Fired with the status of the request.
       */
      function listen(callback: () => void): void;

      /**
       * Closes the web server. It can be re-opened again.
       */
      function close(): void;

      /**
       * Fired when the web server receives an incoming request. The event contains three strings: 'url', 'content' and 'contentType'.
       */
      abstract class onRequest implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }
    }
  }

  namespace logitech {
    /**
     * Gets the current version of the LGS.
     * @param callback Called with the version of LGS currently installed.
     */
    function getVersion(callback: () => void): void;

    /**
     * Gets the currently installed Logitech devices.
     * @param callback Called with the current device information.
     */
    function getDevices(callback: () => void): void;

    namespace arx {
      /**
       * Initializes the Arx API.
       * @param identifier An id for the app that will be discovered by LGS.
       * @param friendlyName A friendly display name.
       * @param callback A callback with the result of the request.
       */
      function init(
        identifier: string,
        friendlyName: string,
        callback: () => void
      ): void;

      /**
       * Publishes an entire app according to the folder set in the manifest file and (optional) sets an index file.
       * @param indexFilename An optional file to use as index index.
       * @param callback A callback with the result of the request.
       */
      function publishApp(indexFilename: string, callback: () => void): void;

      /**
       * Adds a file using an overwolf-extension:// or overwolf-media:// url.
       * @param fileUrl The Overwolf url to add.
       * @param fileName The file name to add as.
       * @param mimeType An optional mime type.
       * @param callback A callback with the result of the request.
       */
      function addFileAs(
        fileUrl: string,
        fileName: string,
        mimeType: string,
        callback: () => void
      ): void;

      /**
       * Adds content from a base64 string.
       * @param base64Content The base64 string.
       * @param fileName The file name to add as.
       * @param callback A callback with the result of the request.
       */
      function addContentAs(
        base64Content: string,
        fileName: string,
        callback: () => void
      ): void;

      /**
       * Adds content from a byte array.
       * @param content The byte array.
       * @param fileName The file name to add as.
       * @param mimeType An optional mime type.
       * @param callback A callback with the result of the request.
       */
      function addContentAs(
        content: number[],
        fileName: string,
        mimeType: string,
        callback: () => void
      ): void;

      /**
       * Adds content from a UTF8 string.
       * @param stringContent The UTF8 string.
       * @param fileName The file name to add as.
       * @param mimeType An optional mime type.
       * @param callback A callback with the result of the request.
       */
      function addUtf8StringAs(
        stringContent: string,
        fileName: string,
        mimeType: string,
        callback: () => void
      ): void;

      /**
       * Add an image from a bitmap.
       * @param bitmap A byte array representing a bitmap.
       * @param width The width of the bitmap.
       * @param height The height of the bitmap.
       * @param fileName The file name to add as.
       * @param callback A callback with the result of the request.
       */
      function addImageFromBitmap(
        bitmap: number[],
        width: number,
        height: number,
        fileName: string,
        callback: () => void
      ): void;

      /**
       * Sets the index file of the website.
       * @param fileName The file to use as index.
       * @param callback A callback with the result of the request.
       */
      function setIndex(fileName: string, callback: () => void): void;

      /**
       * Sets a property of a tag by ID.
       * @param tagId The ID of the tag to set the property to.
       * @param prop The name of the property to change.
       * @param newValue The new value.
       * @param callback A callback with the result of the request.
       */
      function setTagPropertyById(
        tagId: string,
        prop: string,
        newValue: string,
        callback: () => void
      ): void;

      /**
       * Sets a property of a tag(s) by class.
       * @param tagsClass The class of the tag(s) to set the property to.
       * @param prop The name of the property to change.
       * @param newValue The new value.
       * @param callback A callback with the result of the request.
       */
      function setTagsPropertyByClass(
        tagsClass: string,
        prop: string,
        newValue: string,
        callback: () => void
      ): void;

      /**
       * Sets the content of a tag by ID.
       * @param tagId The ID of the tag to set the content to.
       * @param newContent The new content.
       * @param callback A callback with the result of the request.
       */
      function setTagContentById(
        tagId: string,
        newContent: string,
        callback: () => void
      ): void;

      /**
       * Sets the content of a tag(s) by class.
       * @param tagsClass The class of the tag(s) to set the content to.
       * @param newContent The new content.
       * @param callback A callback with the result of the request.
       */
      function setTagsContentByClass(
        tagsClass: string,
        newContent: string,
        callback: () => void
      ): void;

      /**
       * Shuts down the API.
       */
      function shutdown(): void;

      /**
             * {
        "summary": "An Arx event send with a Logitech Arx Event Data object."
      }
             */
      abstract class onEvent implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      /**
       * Triggered when an error occurs, sent with an error code.
       */
      abstract class onError implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }
    }

    namespace led {
      /**
       * Initializes the LED API.
       * @param callback A callback with the result of the request.
       */
      function init(callback: () => void): void;

      /**
       * Sets the target devices to use.
       * @param targetDevices An array of
       * @param callback A callback with the result of the request.
       */
      function setTargetDevice(
        targetDevices: any[],
        callback: () => void
      ): void;

      /**
       * Saves the current lighting.
       * @param callback A callback with the result of the request.
       */
      function saveCurrentLighting(callback: () => void): void;

      /**
       * Sets the lighting for the entire device.
       * @param redPercentage Red percentage (0 - 100)
       * @param greenPercentage Green percentage (0 - 100)
       * @param bluePercentage Blue percentage (0 - 100)
       * @param callback A callback with the result of the request.
       */
      function setLighting(
        redPercentage: number,
        greenPercentage: number,
        bluePercentage: number,
        callback: () => void
      ): void;

      /**
       * Restores the lightning to the last previously saved state.
       * @param callback A callback with the result of the request.
       */
      function restoreLighting(callback: () => void): void;

      /**
       * Flashes the lighting on the device.
       * @param redPercentage Red percentage (0 - 100)
       * @param greenPercentage Green percentage (0 - 100)
       * @param bluePercentage Blue percentage (0 - 100)
       * @param milliSecondsDuration The duration to flash in milliseconds.
       * @param milliSecondsInterval The interval for flashes in milliseconds.
       * @param callback A callback with the result of the request.
       */
      function flashLighting(
        redPercentage: number,
        greenPercentage: number,
        bluePercentage: number,
        milliSecondsDuration: number,
        milliSecondsInterval: number,
        callback: () => void
      ): void;

      /**
       * Pulses the lighting on the device.
       * @param redPercentage Red percentage (0 - 100)
       * @param greenPercentage Green percentage (0 - 100)
       * @param bluePercentage Blue percentage (0 - 100)
       * @param milliSecondsDuration The duration to flash in milliseconds.
       * @param milliSecondsInterval The interval for flashes in milliseconds.
       * @param callback A callback with the result of the request.
       */
      function pulseLighting(
        redPercentage: number,
        greenPercentage: number,
        bluePercentage: number,
        milliSecondsDuration: number,
        milliSecondsInterval: number,
        callback: () => void
      ): void;

      /**
       * Stops ongoing pulse/flash effects.
       * @param callback A callback with the result of the request.
       */
      function stopEffects(callback: () => void): void;

      /**
       * Sets the lighting from an overwolf-extension:// or overwolf-media:// url. The file must be 21x6.
       * @param bitmapUrl The Overwolf url to add.
       * @param callback A callback with the result of the request.
       */
      function setLightingFromBitmap(
        bitmapUrl: string,
        callback: () => void
      ): void;

      /**
       * Sets the lighting from a bitmap byte array.
       * @param bitmap A byte array representing a 21x6 bitmap.
       * @param callback A callback with the result of the request.
       */
      function setLightingFromBitmap(
        bitmap: number[],
        callback: () => void
      ): void;

      /**
       * Sets the lighting for a specific key by scan code.
       * @param keyCode The key scan code.
       * @param redPercentage Red percentage (0 - 100)
       * @param greenPercentage Green percentage (0 - 100)
       * @param bluePercentage Blue percentage (0 - 100)
       * @param callback A callback with the result of the request.
       */
      function setLightingForKeyWithScanCode(
        keyCode: number,
        redPercentage: number,
        greenPercentage: number,
        bluePercentage: number,
        callback: () => void
      ): void;

      /**
       * Sets the lighting for a specific key by HID code.
       * @param keyCode The key HID code.
       * @param redPercentage Red percentage (0 - 100)
       * @param greenPercentage Green percentage (0 - 100)
       * @param bluePercentage Blue percentage (0 - 100)
       * @param callback A callback with the result of the request.
       */
      function setLightingForKeyWithHidCode(
        keyCode: number,
        redPercentage: number,
        greenPercentage: number,
        bluePercentage: number,
        callback: () => void
      ): void;

      /**
       * Sets the lighting for a specific key by quartz code.
       * @param keyCode The key quartz code.
       * @param redPercentage Red percentage (0 - 100)
       * @param greenPercentage Green percentage (0 - 100)
       * @param bluePercentage Blue percentage (0 - 100)
       * @param callback A callback with the result of the request.
       */
      function setLightingForKeyWithQuartzCode(
        keyCode: number,
        redPercentage: number,
        greenPercentage: number,
        bluePercentage: number,
        callback: () => void
      ): void;

      /**
       * Sets the lighting for a specific key by key name.
       * @param keyName The key name. For a list of key names see
       * @param redPercentage Red percentage (0 - 100)
       * @param greenPercentage Green percentage (0 - 100)
       * @param bluePercentage Blue percentage (0 - 100)
       * @param callback A callback with the result of the request.
       */
      function setLightingForKeyWithKeyName(
        keyName: any,
        redPercentage: number,
        greenPercentage: number,
        bluePercentage: number,
        callback: () => void
      ): void;

      /**
       * Saves the current lighting of a specific key.
       * @param keyName The key name. For a list of key names see
       * @param callback A callback with the result of the request.
       */
      function saveLightingForKey(keyName: any, callback: () => void): void;

      /**
       * Restores a previously saved lighting for a specific key.
       * @param keyName The key name. For a list of key names see
       * @param callback A callback with the result of the request.
       */
      function restoreLightingForKey(keyName: any, callback: () => void): void;

      /**
       * Flashes a single key.
       * @param keyName The key name. For a list of key names see
       * @param redPercentage Red percentage (0 - 100)
       * @param greenPercentage Green percentage (0 - 100)
       * @param bluePercentage Blue percentage (0 - 100)
       * @param milliSecondsDuration The duration to flash in milliseconds.
       * @param milliSecondsInterval The interval for flashes in milliseconds.
       * @param callback A callback with the result of the request.
       */
      function flashSingleKey(
        keyName: any,
        redPercentage: number,
        greenPercentage: number,
        bluePercentage: number,
        milliSecondsDuration: number,
        milliSecondsInterval: number,
        callback: () => void
      ): void;

      /**
       * Pulses a single key.
       * @param keyName The key name. For a list of key names see
       * @param startRedPercentage >Red start percentage (0 - 100)
       * @param startGreenPercentage Green start percentage (0 - 100)
       * @param startBluePercentage Blue start percentage (0 - 100)
       * @param finishRedPercentage Red finish percentage (0 - 100)
       * @param finishGreenPercentage Green finish percentage (0 - 100)
       * @param finishBluePercentage Blue finish percentage (0 - 100)
       * @param milliSecondsDuration The duration to pulse in milliseconds.
       * @param isInfinite States whether the effect is infinite or not.
       * @param callback A callback with the result of the request.
       */
      function pulseSingleKey(
        keyName: any,
        startRedPercentage: number,
        startGreenPercentage: number,
        startBluePercentage: number,
        finishRedPercentage: number,
        finishGreenPercentage: number,
        finishBluePercentage: number,
        milliSecondsDuration: number,
        isInfinite: boolean,
        callback: () => void
      ): void;

      /**
       * Stops ongoing pulse/flash effects on a specific key.
       * @param keyName The key name. For a list of key names see
       * @param callback A callback with the result of the request.
       */
      function stopEffectsOnKey(keyName: any, callback: () => void): void;

      /**
       * Shuts down the API.
       */
      function shutdown(): void;

      /**
       * Triggered when an error occurs, sent with an error code.
       */
      abstract class onError implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }

      namespace enums {
        const enum KeyboardNames {
          ESC,
          F1,
          F2,
          F3,
          F4,
          F5,
          F6,
          F7,
          F8,
          F9,
          F10,
          F11,
          F12,
          PRINT_SCREEN,
          SCROLL_LOCK,
          PAUSE_BREAK,
          TILDE,
          ONE,
          TWO,
          THREE,
          FOUR,
          FIVE,
          SIX,
          SEVEN,
          EIGHT,
          NINE,
          ZERO,
          MINUS,
          EQUALS,
          BACKSPACE,
          INSERT,
          HOME,
          PAGE_UP,
          NUM_LOCK,
          NUM_SLASH,
          NUM_ASTERISK,
          NUM_MINUS,
          TAB,
          Q,
          W,
          E,
          R,
          T,
          Y,
          U,
          I,
          O,
          P,
          OPEN_BRACKET,
          CLOSE_BRACKET,
          BACKSLASH,
          KEYBOARD_DELETE,
          END,
          PAGE_DOWN,
          NUM_SEVEN,
          NUM_EIGHT,
          NUM_NINE,
          NUM_PLUS,
          CAPS_LOCK,
          A,
          S,
          D,
          F,
          G,
          H,
          J,
          K,
          L,
          SEMICOLON,
          APOSTROPHE,
          ENTER,
          NUM_FOUR,
          NUM_FIVE,
          NUM_SIX,
          LEFT_SHIFT,
          Z,
          X,
          C,
          V,
          B,
          N,
          M,
          COMMA,
          PERIOD,
          FORWARD_SLASH,
          RIGHT_SHIFT,
          ARROW_UP,
          NUM_ONE,
          NUM_TWO,
          NUM_THREE,
          NUM_ENTER,
          LEFT_CONTROL,
          LEFT_WINDOWS,
          LEFT_ALT,
          SPACE,
          RIGHT_ALT,
          RIGHT_WINDOWS,
          APPLICATION_SELECT,
          RIGHT_CONTROL,
          ARROW_LEFT,
          ARROW_DOWN,
          ARROW_RIGHT,
          NUM_ZERO,
          NUM_PERIOD
        }

        const enum LogitechDeviceLightingType {
          Mono,
          RGB,
          PerkeyRGB,
          All
        }
      }
    }
  }

  namespace egs {
    /**
     * Returns whether Overwolf's EGS is up and running.
     * @param callback The result of the request.
     */
    function isEnabled(callback: () => void): void;

    /**
     * Requests a shelf to be displayed in the EGS.
     * @param callback The result of the request.>
     */
    function requestToDisplay(callback: () => void): void;

    /**
     * Sets the status of the shelf. This call is only valid after a successful call to requestToDisplay().
     * @param status The status to update. See
     * @param callback The result of the request.
     */
    function setStatus(status: any, callback: () => void): void;

    /**
     * Sets the requested shelf height - it is up to the Game Summary if it will accept this new size or not (based on the manifest limits).The width can not be changed by the app.The shelf should be responsive to the size of it's containing windowand not try to change it's size according to the call to this function
     * @param height The request height
     * @param callback The result of the request.
     */
    function setHeight(height: number, callback: () => void): void;

    /**
     * get current EGS session info
     * @param callback
     */
    function getSessionInfo(callback: () => void): void;

    /**
     * get current EGS selected match
     * @param callback
     */
    function getSelectedMatch(callback: () => void): void;

    /**
     * Fired when Overwolf's EGS screen is enabled or disabled.
     */
    abstract class onEgsEnablementChanged implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when EGS requests a shelf to perform a retry attempt in case of an error.
     */
    abstract class onRetryRequested implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fire when EGS selected match \ session changed.
     */
    abstract class onMatchSelectionChanged implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fire when EGS session info changed (new match started).
     */
    abstract class onSessionInfoChanged implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    namespace enums {
      const enum ShelfStatus {
        Loading,
        Ready,
        Retrying,
        Error
      }
    }
  }

  namespace streaming {
    /**
         * Start a new stream.
         * @param settings The stream settings.
         * @param callback [
     "A function that will be called with a JSON containing the status\r\n and the stream id if successful:\r\n ",
     "\r\n or an error message if not:\r\n "
    ]
         */
    function start(settings: any, callback: () => void): void;

    /**
         * Stops the given stream.
         * @param streamId The id of the stream to stop.
         * @param callback [
     "A function that will be called with a JSON containing the status\r\n and the stream id if successful:\r\n ",
     "\r\n or an error message if not:\r\n "
    ]
         */
    function stop(streamId: number, callback: () => void): void;

    /**
     * Changes the volume of the stream.
     * @param streamId The id of the stream on which the volume is changed.
     * @param audioOptions The new volumes encapsulated in an object.
     * @param callback A function that will be called with success or error status.
     */
    function changeVolume(
      streamId: number,
      audioOptions: any,
      callback: () => void
    ): void;

    /**
     * Sets the watermark settings.
     * @param settings The new watermark settings.
     * @param callback A callback to call when done setting the new watermark settings.
     */
    function setWatermarkSettings(settings: any, callback: () => void): void;

    /**
     * Gets the watermark settings.
     * @param callback A function that will be called with a JSON containing the statusand the watermark settings if successful or an error message if not.
     */
    function getWatermarkSettings(callback: () => void): void;

    /**
     * Call the given callback function with the window's streaming mode as a parameter.
     * @param windowId The id of the window for which to get the streaming mode.
     * @param callback The callback function to call with the window's streaming mode as a parameter.
     */
    function getWindowStreamingMode(
      windowId: string,
      callback: () => void
    ): void;

    /**
     * Set the window's stream mode.
     * @param windowId The id of the window for which to set the streaming mode.
     * @param streamingMode The desired streaming mode.
     * @param callback A function called after streaming mode was set indicating success, or error in case of an error.
     */
    function setWindowStreamingMode(
      windowId: string,
      streamingMode: any,
      callback: () => void
    ): void;

    /**
     * Sets the streaming mode for the window when using OBS.
     * @param windowId The id of the window for which to set the streaming mode.
     * @param obsStreamingMode The desired OBS streaming mode
     * @param callback A function called after streaming mode was set indicating success, or error in case of an error.
     */
    function setWindowObsStreamingMode(
      windowId: string,
      obsStreamingMode: any,
      callback: () => void
    ): void;

    /**
     * Set a stream's Be Right Back image.
     * @param streamId The id of the stream for which to set the Be Right Back image.
     * @param image The image to set, as an IMG object or a URL.
     * @param backgroundColor The color to paint the last game frame with before overlaying the image.
     * @param callback A callback function to call with success or failure indication.
     */
    function setBRBImage(
      streamId: number,
      image: any,
      backgroundColor: string,
      callback: () => void
    ): void;

    /**
     * Update stream desktop capture options.
     * @param streamId The id of the stream for which to set the Be Right Back image.
     * @param newOptions The updated desktop capture streaming options.
     * @param mouseCursorStreamingMethod The updated value of the mouse cursor streaming method.
     * @param callback A callback function to call with success or failure indication.
     */
    function updateStreamingDesktopOptions(
      streamId: number,
      newOptions: any,
      mouseCursorStreamingMethod: any,
      callback: () => void
    ): void;

    /**
     * Returns an array of supported streaming encoders, with extra metadata for each one.
     * @param callback A callback function to call with the array of encoders and their metadata.
     */
    function getStreamEncoders(callback: () => void): void;

    /**
     * Returns an array of all audio devices that can be used.
     * @param callback A callback function to call with the array of audio devices and their metadata.
     */
    function getAudioDevices(callback: () => void): void;

    /**
         * Update Tobii streaming layer.
         * @param streamId The id of the stream to stop.
         * @param param The Tobii layer visibilty param.
         * @param callback [
     "A function that will be called with a JSON containing the status\r\n and the stream id if successful:\r\n ",
     "\r\n or an error message if not:\r\n "
    ]
         */
    function updateTobiiSetting(
      streamId: number,
      param: any,
      callback: () => void
    ): void;

    /**
     * Fired when the stream started streaming a new image source (desktop, game).
     */
    abstract class onStreamingSourceImageChanged implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when the stream has stopped.
     */
    abstract class onStopStreaming implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when the stream has stopped.
     */
    abstract class onStartStreaming implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired upon an error with the stream.
     */
    abstract class onStreamingError implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired upon a warning with the stream.
     */
    abstract class onStreamingWarning implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired upon video file splited.
     */
    abstract class onVideoFileSplited implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    namespace enums {
      const enum StreamMouseCursor {
        both,
        gameOnly,
        desktopOnly
      }

      const enum ObsStreamingMode {
        OBSNoAwareness,
        OBSAwareness,
        OBSAwarenessHideFromDeskTop
      }

      const enum StreamingProvider {
        Unknown
      }

      const enum StreamingMode {
        WhenVisible,
        Always,
        Never
      }

      const enum StreamEncoder {
        INTEL,
        X264,
        NVIDIA_NVENC,
        AMD_AMF
      }

      const enum StreamEncoderPreset_Intel {
        LOW,
        MEDIUM,
        HIGH
      }

      const enum StreamEncoderPreset_x264 {
        ULTRAFAST,
        SUPERFAST,
        VERYFAST,
        FASTER,
        FAST,
        MEDIUM,
        SLOW,
        SLOWER,
        VERYSLOW,
        PLACEBO
      }

      const enum StreamEncoderPreset_AMD_AMF {
        AUTOMATIC,
        BALANCED,
        SPEED,
        QUALITY,
        ULTRA_LOW_LATENCY,
        LOW_LATENCY
      }

      const enum StreamEncoderRateControl_AMD_AMF {
        RC_CBR,
        RC_CQP,
        RC_VBR,
        RC_VBR_MINQP
      }

      const enum StreamEncoderPreset_NVIDIA {
        AUTOMATIC,
        DEFAULT,
        HIGH_QUALITY,
        HIGH_PERFORMANCE,
        BLURAY_DISK,
        LOW_LATENCY,
        HIGH_PERFORMANCE_LOW_LATENCY,
        HIGH_QUALITY_LOW_LATENCY,
        LOSSLESS,
        HIGH_PERFORMANCE_LOSSLESS
      }

      const enum StreamEncoderRateControl_NVIDIA {
        RC_CBR,
        RC_CQP,
        RC_VBR,
        RC_VBR_MINQP,
        RC_2_PASS_QUALITY
      }

      const enum StreamEncoderRateControl_x264 {
        RC_CBR,
        RC_CQP,
        RC_VBR,
        RC_VBR_MINQP,
        RC_2_PASS_QUALITY
      }
    }
  }

  namespace log {
    /**
     * Writes verbose (debug) level log message to the common log.
     * @param msg The message to write to the log file.
     */
    function verbose(msg: string): void;

    /**
     * Writes info level log message to the common log.
     * @param msg The message to write to the log file.
     */
    function info(msg: string): void;

    /**
     * Writes warning level log message to the common log.
     * @param msg The message to write to the log file.
     */
    function warning(msg: string): void;

    /**
     * Writes error level log message to the common log.
     * @param msg The message to write to the log file.
     */
    function error(msg: string): void;

    /**
     * Writes error level log message to the common log.
     * @param msg The message to write to the log file.
     */
    function critical(msg: string): void;
  }

  namespace extensions {
    /**
     * Launch an extension by its unique id.
     * @param uid The extension unique id.
     * @param parameter A parameter to pass to the extension. The extension may or may not use this parameter.
     */
    function launch(uid: string, parameter: any): void;

    /**
     * Sets a string for other extensions to read.
     * @param info A string to post.
     */
    function setInfo(info: any): void;

    /**
     * Gets an extension's info string.
     * @param id The id of the extension to get info for.
     * @param callback Called with the info.
     */
    function getInfo(id: string, callback: () => void): void;

    /**
     * Requests info updates for extension. Will also be called when the extension launches/closes.
     * @param id The id of the extension to get updates for.
     * @param eventsCallback A callback to receive info updates.
     * @param callback The status of the request.
     */
    function registerInfo(
      id: string,
      eventsCallback: () => void,
      callback: () => void
    ): void;

    /**
     * Stop requesting info for extension.
     * @param id The id of the extension to stop getting updates for.
     * @param callback The status of the request.
     */
    function unregisterInfo(id: string, callback: () => void): void;

    /**
     * Gets the running state of an extension.
     * @param id The id of the extension to get updates for.
     * @param callback The result of the request.
     */
    function getRunningState(id: string, callback: () => void): void;

    /**
     * Returns the requested extension's manifest object.
     * @param id The id of the extension to get the manifest for.
     * @param callback A function called with the manifest data.
     */
    function getManifest(id: string, callback: () => void): void;

    /**
     * The App will relaunch it self
     */
    function relaunch(): void;

    /**
     * Fires when the current app is launched while already running. This is useful in the case where the app has custom logic for clicking its dock button while it is already running. The event contaisn an 'origin' stringwhich what triggered the app launch (dock, storeapi, odk, etc...)
     */
    abstract class onAppLaunchTriggered implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    namespace current {
      /**
       * Retrieves an extra object (providing external APIs) registered in the extension's manifest.
       * @param name The name of the object as appears in the manifest.
       * @param callback A function called with the extra object, if found, and a status indicating success or failure.
       */
      function getExtraObject(name: string, callback: () => void): void;

      /**
       * Returns the current extension's manifest object.
       * @param callback A function called with the manifest data.
       */
      function getManifest(callback: (manifest: any) => void): void;
    }
  }

  namespace utils {
    /**
     * Copies the given string to the clipboard.
     * @param data The string to be copied to the clipboard.
     */
    function placeOnClipboard(data: string): void;

    /**
     * Gets the string currently placed on the clipboard. If no string is placed on the clipboard, returns null.
     * @param callback Called with the string from the clipboard.
     */
    function getFromClipboard(callback: () => void): void;

    /**
     * Returns an array with all monitors data including their display resolution, bounds, and names.
     * @param callback Called with the monitors array.
     */
    function getMonitorsList(callback: () => void): void;

    /**
     * Sends a string representing a key stroke to the game, causing a simulated key stroke.
     * @param keyString The key or key combination to send, as a string. e.g. "Alt+I"
     */
    function sendKeyStroke(keyString: string): void;

    /**
     * Opens a file picker dialog to browse for a file. A url to the selected file will be returned.
     * @param filter A file filter. Supports wild cards (*) and seperated by commas (,). Ex. myFile*.*,*.txt
     * @param callback Called with a url to the selected file.
     */
    function openFilePicker(filter: string, callback: () => void): void;

    /**
     * Opens a Folder picker dialog to browse for a folder. A full path to the selected folder will be returned.
     * @param initialPath The starting folder's path
     * @param callback Called with the selected folder.
     */
    function openFolderPicker(initialPath: string, callback: () => void): void;

    /**
     * Opens Windows Explorer and selects a file received as an Overwolf media url.
     * @param url An overwolf media url (overwolf://media/*)
     * @param callback Called with the result of the request.
     */
    function openWindowsExplorer(url: string, callback: () => void): void;

    /**
     * Returns whether the current device has touch capabilities.
     * @param callback Called with the result of the request.
     */
    function isTouchDevice(callback: () => void): void;

    /**
     * Opens the url in the user's default browser.
     * @param url A url to open.
     */
    function openUrlInDefaultBrowser(url: string): void;

    /**
     * Opens the url in Overwolf's browser.
     * @param url A url to open.
     */
    function openUrlInOverwolfBrowser(url: string): void;

    /**
     * Returns system information which includes information about CPU, Monitors, GPU, HDD, RAM and more.
     * @param callback Called with the system information.
     */
    function getSystemInformation(callback: (result: any) => void): void;

    /**
     * Sends Overwolf logs to Overwolf servers for debugging.
     * @param description The reason for sending the logs.
     * @param callback A callback with the status of the request.
     */
    function sendLogs(description: string, callback: () => void): void;

    /**
     * Upload Overwolf client logs to Overwolf servers for current calling app.
     * @param callback A callback with the status of the request.
     */
    function uploadClientLogs(callback: () => void): void;

    /**
     * Returns system Peripherals information.
     * @param callback Called with the system information.
     */
    function getPeripherals(callback: () => void): void;

    /**
     * Open Overwolf store one app page.
     * @param appId The requesterd app id.
     */
    function openStoreOneAppPage(appId: string): void;

    /**
     * Simulate Mouse click on current mouse Position.
     * @param callback A callback with the status of the request.
     */
    function simulateMouseClick(callback: () => void): void;

    /**
     * Simulate Mouse click on {x,y} mouse Position.
     * @param x The Mouse X position.
     * @param y The Mouse Y position.
     * @param callback A callback with the status of the request.
     */
    function simulateMouseClick(
      x: number,
      y: number,
      callback: () => void
    ): void;

    /**
     * Is mouse left button pressed.
     * @param callback A callback with the result.
     */
    function isMouseLeftButtonPressed(callback: () => void): void;
  }

  namespace settings {
    /**
         * {
      "code": "{\r\n status : \"success\",\r\n hotkey : \"Ctrl+F2\"\r\n }",
      "summary": "Returns the hotkey assigned to a given feature id by calling the callback. The callback parameter will be a JSON in the following format:"
    }
         * @param featureId The feature id for which to get the set hotkey.
         * @param callback A function called with the result of the request which contains the hotkey if successful.
         */
    function getHotKey(
      featureId: string,
      callback: (result: any) => void
    ): void;

    /**
         * {
      "para": "If the registration had failed, the callback function will be called immediately with the status \"error\" and another property,\r\n \"error\", indicating the reason for the failure. Otherwise, the callback function will be called when the hotkey is pressed and the status\r\n will be \"success\". Note that Shift can only be combined with F keys.",
      "summary": "Registers a callback for a given hotkey action."
    }
         * @param actionId The action id for which to register the callback.
         * @param callback The function to run when the hotkey is pressed.
         */
    function registerHotKey(
      actionId: string,
      callback: (result: any) => void
    ): void;

    /**
     * Returns the current language overwolf is set to in a two letter ISO name format.
     * @param callback
     */
    interface IInitI18N {
      status: "success" | "error";
      language: string;
    }
    function getCurrentOverwolfLanguage(
      callback: (result: IInitI18N) => void
    ): void;

    /**
     * Returns the current folder overwolf uses to store screenshots (and gifs).
     * @param callback
     */
    function getOverwolfScreenshotsFolder(callback: () => void): void;

    /**
     * Sets the folder Overwolf uses to store screenshots.
     * @param path The folder to use
     * @param callback Whether the request was successful
     */
    function setOverwolfScreenshotsFolder(
      path: string,
      callback: () => void
    ): void;

    /**
     * Returns the current folder overwolf uses to store videos.
     * @param callback
     */
    function getOverwolfVideosFolder(callback: () => void): void;

    /**
     * Sets the folder Overwolf uses to store videos.
     * @param path The folder to use
     * @param callback Whether the request was successful
     */
    function setOverwolfVideosFolder(path: string, callback: () => void): void;

    /**
     * Returns the current video capture settings.
     * @param callback
     */
    function getVideoCaptureSettings(callback: () => void): void;

    /**
     * Sets new video capture settings.
     * @param resolutionSettings
     * @param fps
     * @param callback
     */
    function setVideoCaptureSettings(
      resolutionSettings: any,
      fps: number,
      callback: () => void
    ): void;

    /**
     * Returns the current audio capture settings.
     * @param callback
     */
    function getAudioCaptureSettings(callback: () => void): void;

    /**
     * Sets new audio capture settings.
     * @param enableSound
     * @param enableMicrophone
     * @param callback
     */
    function setAudioCaptureSettings(
      enableSound: boolean,
      enableMicrophone: boolean,
      callback: () => void
    ): void;

    /**
     * Sets the state (on/off), position, offset (in pixels) and scale [0, 1] of the Fps control.
     * @param settings
     * @param callback
     */
    function setFpsSettings(settings: any, callback: () => void): void;

    /**
     * Gets the status of the FPS control (on/off), its position, its offset (in pixels) and its scale [0, 1].
     * @param callback
     */
    function getFpsSettings(callback: () => void): void;

    /**
     * Fired when fps settings are changed.
     */
    abstract class onFpsSettingsChanged implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when video capture settings are changed.
     */
    abstract class OnVideoCaptureSettingsChanged implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when audio capture settings are changed.
     */
    abstract class OnAudioCaptureSettingsChanged implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    /**
     * Fired when a hotkey is modified. Apps will only be notified ofhotkey changes that relate to them.
     */
    abstract class OnHotKeyChanged implements OWEvent {
      static addListener(callback: (payload?: any) => void): void;
      static removeListener(callback: (payload?: any) => void): void;
    }

    namespace enums {
      const enum ResolutionSettings {
        Original
      }
    }

    namespace games {
      /**
       * Returns the current Overlay setting for the given game (if any exist)
       * @param gameClassId the game id for which the flag is retrieved for
       * @param callback
       */
      function getOverlayEnabled(
        gameClassId: number,
        callback: () => void
      ): void;

      /**
       * Returns the current Auto-Launch enabled setting for the calling app ina given game (gameClassId)
       * @param gameClassId the game id for which the flag is retrieved for
       * @param callback
       */
      function getAutoLaunchEnabled(
        gameClassId: number,
        callback: () => void
      ): void;
    }
  }

  namespace social {
    namespace discord {
      /**
       * Opens the login dialog. There is no callback for this method and the only way to know if the user signed in is via |onLoginStateChanged|
       */
      function performUserLogin(): void;

      /**
       * *Performs a "strong" sign out of Discord, so that even if the user performs a login via the Overwolf Settings / Accounts page, they will be considered signed out*
       * @param callback On success: { status: "success" }On failure: { status: "error", reason: [description] }
       */
      function performLogout(callback: () => void): void;

      /**
       * If the user is currently logged into Discord, this will return user information. Otherwise, an error is returned
       * @param callback Will contain user information or error if the request has failed.
       */
      function getUserInfo(callback: () => void): void;

      /**
       * If the user is currently logged into Discord, this will return the guilds that the user is registered to. Otherwise, an error is returned
       * @param callback Will contain guild (server) information or error if the request has failed.
       */
      function getGuilds(callback: () => void): void;

      /**
       * If the user is currently logged into Discord, this will return the channels of the given guildId, for which the user has privileges to share images/videos to. Otherwise, an error is returned
       * @param guildId The id of the guild
       * @param callback Will contain guild (server) channels or error if the request has failed.
       */
      function getChannels(guildId: string, callback: () => void): void;

      /**
       * If the user is currently logged into Discord, this will perform the media share (image or video).Possible errors that can occur:- Disconnected (user isn't signed in)- MissingFile (trying to share a missing file)- UnsupportedFile (trying to share an unsupported format)- ExceedsMaxSize (the file is too large: > 8 MB for images, > 100 MBfor videos)
       * @param discordShareParams The share parameters. See DiscordShareParameters
       * @param callback Will contain the status of the request.
       */
      function share(discordShareParams: any, callback: () => void): void;

      /**
       * Fired when the user's login state changes.Example callback object:{ state = "connected" }{ state = "disconnected" }
       */
      abstract class onLoginStateChanged implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }
    }

    namespace gfycat {
      /**
       * Opens the login dialog. There is no callback for this method and theonly way to know if the user signed in is via |onLoginStateChanged|
       */
      function performUserLogin(): void;

      /**
       * Performs a "strong" sign out of Gfycat, so that even if the userperforms a login via the Overwolf Settings / Accounts page, he willbe considered signed out
       * @param callback On success: { status: "success" }On failure: { status: "error", reason: [description] }
       */
      function performLogout(callback: () => void): void;

      /**
       * If the user is currently logged into Gfycat, this will return userinformation: https://developers.gfycat.com/api/#getting-the-authenticated-user-s-detailsOtherwise, an error is returned
       * @param callback Will contain user information or error if the request has failed.
       */
      function getUserInfo(callback: () => void): void;

      /**
       * Possible errors that can occur:- Disconnected (user isn't signed in)- MissingFile (trying to share a missing file)- UnsupportedFile (trying to share an unsupported format)- ExceedsMaxSize (the file is too large: > 8 MB for images, > 100 MBfor videos)
       * @param gfycatShareParams The share parameters. See GfycatShareParameters
       * @param callback Will contain the status of the request.
       */
      function share(gfycatShareParams: any, callback: () => void): void;

      /**
       * Fired when a media event has been posted.
       */
      abstract class onLoginStateChanged implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }
    }

    namespace twitter {
      /**
       * Opens the login dialog. There is no callback for this method and theonly way to know if the user signed in is via |onLoginStateChanged|
       */
      function performUserLogin(): void;

      /**
       * Performs a "strong" sign out of Twitter, so that even if the userperforms a login via the Overwolf Settings / Accounts page, he willbe considered signed out
       * @param callback On success: { status: "success" }On failure: { status: "error", reason: [description] }
       */
      function performLogout(callback: () => void): void;

      /**
       * If the user is currently logged into Twitter, this will return userinformation:{ avatar: "http://abs.twimg.com/sticky/...", id: "111111111112222222" name: "full name" screenName: "screenname123"}Otherwise, an error is returned
       * @param callback Will contain user information or error if the request has failed.
       */
      function getUserInfo(callback: () => void): void;

      /**
             * {
        "summary": "If the user is currently logged into Twitter, this will perform themedia share (image or video).|twitterShareParams| is of type  errors that can occur:- Disconnected (user isn't signed in)- MissingFile (trying to share a missing file)- UnsupportedFile (trying to share an unsupported format)- ExceedsMaxSize (the file is too large: > 15 MB for images, > 512 MBfor videos)"
      }
             * @param twitterShareParams The share parameters. See TwitterShareParameters
             * @param callback Will contain the status of the request.
             */
      function share(twitterShareParams: any, callback: () => void): void;

      /**
       * Fired when the user's login state changes.Example callback object:{ state = "connected" }{ state = "disconnected" }
       */
      abstract class onLoginStateChanged implements OWEvent {
        static addListener(callback: (payload?: any) => void): void;
        static removeListener(callback: (payload?: any) => void): void;
      }
    }
  }
}
