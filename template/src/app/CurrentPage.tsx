import { lazy } from 'react'
import { WINDOW_NAMES } from './constants'

//window name in manifest file
const { BACKGROUND, DESKTOP, INGAME } = WINDOW_NAMES

//lazy load window components, so that they are not loaded until they are needed
//this is done to reduce the amount of time spent loading
const BackgroundWindow = lazy(() =>
  import('features/backgroundWindow/BackgroundWindow'),
)
const DesktopWindow = lazy(() => import('features/desktopWindow/DesktopWindow'))
const InGameWindow = lazy(() => import('features/inGameWindow/InGameWindow'))

interface ICurrentPageProps {
  page: string
}
//return the current page based on the window name, the current window name is passed in as a prop
//this is used to determine which page to render
export const CurrentPage = ({ page }: ICurrentPageProps) => {
  switch (page) {
    case BACKGROUND:
      return <BackgroundWindow />
    case DESKTOP:
      return <DesktopWindow />
    case INGAME:
      return <InGameWindow />
    default:
      return <p>Loading ...</p>
  }
}
