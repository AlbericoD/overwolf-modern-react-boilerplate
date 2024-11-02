import { useState, useCallback, useEffect } from "react";
import {
  WINDOW_NAMES,
  DISPLAY_OVERWOLF_HOOKS_LOGS,
} from "app/shared/constants";
import { useWindow, useDrag } from "overwolf-hooks";
import { classNames, isDev } from "lib/utils";
import { SVGComponent } from "./DesktopHeaderSVG";
import "./styles/DesktopHeader.css";

const { DESKTOP, BACKGROUND } = WINDOW_NAMES;

const handleDiscordClick = () => {
  if (isDev) return window.open("https://discord.gg/");
  overwolf.utils.openUrlInDefaultBrowser("https://discord.gg/");
};

export const DesktopHeader = () => {
  const [maximized, setMaximize] = useState(false);
  const [desktopWindow] = useWindow(DESKTOP, DISPLAY_OVERWOLF_HOOKS_LOGS);
  const [backgroundWindow] = useWindow(BACKGROUND, DISPLAY_OVERWOLF_HOOKS_LOGS);
  const { onDragStart, onMouseMove, setCurrentWindowID } = useDrag(
    null,
    DISPLAY_OVERWOLF_HOOKS_LOGS,
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
    <header
      className={"header"}
      onMouseDown={onDragStart}
      onMouseMove={onMouseMove}
    >
      <SVGComponent />
      <h1 className={"header__title"}>
        🐺 ICON - OVERWOLF-MODERN-REACT-BOILERPLATE-V4
      </h1>
      <div className={"header__controls__group"}>
        <button
          className={classNames("header__icon header__control header__discord")}
          onClick={handleDiscordClick}
        >
          <svg>
            <use xlinkHref="#window-control_discord" />
          </svg>
        </button>
        <button
          className="header__icon header__control"
          onClick={() => (window.location.href = "overwolf://settings")}
        >
          <svg>
            <use xlinkHref="#window-control_settings" />
          </svg>
        </button>
        <button className="header__icon header__control">
          <svg>
            <use xlinkHref="#window-control_support" />
          </svg>
        </button>
        <button
          className="header__icon header__control"
          onClick={desktopWindow?.minimize}
        >
          <svg>
            <use xlinkHref="#window-control_minimize" />
          </svg>
        </button>
        <button
          className={classNames(
            "header__icon header__control header__toggle__icons",
            maximized ? "" : "header__toggled",
          )}
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
          className="header__icon header__control header__control__close"
          onClick={backgroundWindow?.close}
        >
          <svg>
            <use xlinkHref="#window-control_close" />
          </svg>
        </button>
      </div>
    </header>
  );
};
