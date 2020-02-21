import { useState, useCallback } from "react";

interface MousePostion {
  x: number;
  y: number;
}

const SIGNIFICANT_MOUSE_MOVE_THRESHOLD = 1;

export const useDrag = (currentWindowID: string | null) => {
  const [owWindow, setOwWindow] = useState<string | null>(currentWindowID);
  const [
    initialMousePosition,
    setMousePosition
  ] = useState<MousePostion | null>(null);
  const [isMouseDown, setMouseDown] = useState<boolean>(false);

  function onDragStart({
    clientX,
    clientY
  }: React.MouseEvent<HTMLElement, MouseEvent>) {
    setMouseDown(true);
    setMousePosition({
      x: clientX,
      y: clientY
    });
  }

  function isSignificantMouseMove({
    clientX,
    clientY
  }: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (!initialMousePosition) return false;

    const diffX = Math.abs(clientX - initialMousePosition.x);
    const diffY = Math.abs(clientY - initialMousePosition.y);
    const isSignificant =
      diffX > SIGNIFICANT_MOUSE_MOVE_THRESHOLD ||
      diffY > SIGNIFICANT_MOUSE_MOVE_THRESHOLD;

    return isSignificant;
  }

  function onMouseMove(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (!isMouseDown || !isSignificantMouseMove(event)) return;
    setMouseDown(false);
    owWindow && overwolf.windows.dragMove(owWindow);
  }

  const setCurrentWindowID = useCallback((id: string) => {
    setOwWindow(id);
  }, []);

  return { setCurrentWindowID, onDragStart, onMouseMove } as const;
};
