import React, { FC, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { WINDOW_NAMES, REQUIRED_FEATURES } from 'app/constants'
import { setEvent, setInfo } from './background-slice'
import { useWindow, useGameEventProvider, useRunningGame } from 'overwolf-hooks'

const { DESKTOP, INGAME } = WINDOW_NAMES

//Hearthstone Game Event Provider
enum Game {
  'Hearhtstone' = 9898,
}

const BackgroundWindow: FC = () => {
  const [currentGame] = useRunningGame()
  const [desktopWindow] = useWindow(DESKTOP)
  const [ingameWindow] = useWindow(INGAME)
  const [{ event, info }, setGameFeatures] = useGameEventProvider<
    GameExample.Info,
    GameExample.Event
  >()
  const dispatch = useDispatch()

  const openStartupWindow = useCallback(() => {
    const gameRunning =
      currentGame?.id === Game.Hearhtstone && currentGame?.gameRunning
    const currentWindow = gameRunning ? ingameWindow : desktopWindow
    gameRunning && setGameFeatures(REQUIRED_FEATURES)
    currentWindow?.restore()
  }, [desktopWindow, ingameWindow, currentGame, setGameFeatures])

  useEffect(() => {
    event && dispatch(setEvent({ event }))
  }, [event, dispatch])
  useEffect(() => {
    info && dispatch(setInfo({ info }))
  }, [info, dispatch])
  useEffect(() => {
    openStartupWindow()
  }, [openStartupWindow])

  return <></>
}

export default BackgroundWindow
