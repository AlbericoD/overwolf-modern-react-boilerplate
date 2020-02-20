import React, { FC, useState, useRef, useCallback } from "react";
// import { DragService } from "service/drag-service";
import { WINDOW_NAMES } from "app/constants";
import { useWindow } from "hooks";
import { SVGComponent } from "./DesktopHeaderSVG";
import style from "./DesktopHeader.module.css";

const { DESKTOP, BACKGROUND } = WINDOW_NAMES;
export const DesktopHeader: FC = () => {
  const headerEl = useRef(null);
  const [show, toggleShow] = useState(false);
  const [desktopWindow] = useWindow(DESKTOP);
  const [backgroundWindow] = useWindow(BACKGROUND);

  const toggleIcon = useCallback(() => {
    toggleShow(value => {
      if (value) desktopWindow?.restore();
      else desktopWindow?.maximize();
      return !value;
    });
  }, [desktopWindow]);

  return (
    <>
      <SVGComponent />
      <header className={style.header} ref={headerEl}>
        <h3 className={style["header-title"]}>ICON</h3>
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
            onClick={() => desktopWindow?.minimize()}
          >
            <svg>
              <use xlinkHref="#window-control_minimize" />
            </svg>
          </button>
          <button
            className={`${style.icon} ${style["toggle-icons"]} ${
              style["window-control"]
            }
            ${show && style["toggled"]}`}
            onClick={() => toggleIcon()}
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
            onClick={() => backgroundWindow?.close()}
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
