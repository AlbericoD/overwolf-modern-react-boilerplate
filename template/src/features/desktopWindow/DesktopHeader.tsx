import { useState, useCallback, useEffect } from "react";
import { WINDOW_NAMES, OVERWOLF_HOOKS_OPTIONS } from "app/constants";
import { useWindow, useDrag } from "overwolf-hooks";
import { SVGComponent } from "./DesktopHeaderSVG";
import style from "./DesktopHeader.module.css";

const { DESKTOP, BACKGROUND } = WINDOW_NAMES;

export const DesktopHeader = () => {
  const [maximized, setMaximize] = useState(false);
  const [desktopWindow] = useWindow(DESKTOP, OVERWOLF_HOOKS_OPTIONS);
  const [backgroundWindow] = useWindow(BACKGROUND, OVERWOLF_HOOKS_OPTIONS);
  const { onDragStart, onMouseMove, setCurrentWindowID } = useDrag(
    null,
    OVERWOLF_HOOKS_OPTIONS
  );

  const toggleIcon = useCallback(() => {
    if (!desktopWindow) return;
    if (!maximized) desktopWindow.maximize();
    else desktopWindow.restore();
    setMaximize(!maximized);
  }, [desktopWindow, maximized]);

  const updateDragWindow = useCallback(() => {
    if (desktopWindow?.id) setCurrentWindowID(desktopWindow.id);
  }, [desktopWindow, setCurrentWindowID]);

  useEffect(updateDragWindow, [updateDragWindow]);

  return (
    <>
      <SVGComponent />
      <header
        className={style.header}
        onMouseDown={onDragStart}
        onMouseMove={onMouseMove}
      >
        <h3 className={style["header-title"]}>
          {" "}
          🐺 ICON - OVERWOLF-MODERN-REACT-BOILERPLATE-V3
        </h3>
        <div className={style["window-controls-group"]}>
          <button
            className={`${style.icon} ${style["window-control"]} ${style["window-control-social"]} ${style.discord} `}
            onClick={() =>
              overwolf.utils.openUrlInDefaultBrowser("https://discord.gg/")
            }
          >
            <svg>
              <use xlinkHref="#window-control_discord" />
            </svg>
          </button>
          <button
            className={`${style.icon} ${style["window-control"]}`}
            onClick={() => (window.location.href = "overwolf://settings")}
          >
            <svg>
              <use xlinkHref="#window-control_settings" />
            </svg>
          </button>
          <button className={`${style.icon} ${style["window-control"]}`}>
            <svg>
              <use xlinkHref="#window-control_support" />
            </svg>
          </button>
          <button
            className={`${style.icon} ${style["window-control"]}`}
            onClick={desktopWindow?.minimize}
          >
            <svg>
              <use xlinkHref="#window-control_minimize" />
            </svg>
          </button>
          <button
            className={`${style.icon} ${style["toggle-icons"]} ${
              style["window-control"]
            }
            ${!maximized && style["toggled"]}`}
            onClick={toggleIcon}
          >
            <svg>
              <use xlinkHref="#window-control_maximize" />
            </svg>
            <svg>
              <use xlinkHref="#window-control_restore" />
            </svg>
          </button>
          <button
            className={`${style.icon} ${style["window-control"]} ${style["window-control-close"]}`}
            onClick={backgroundWindow?.close}
          >
            <svg>
              <use xlinkHref="#window-control_close" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};
