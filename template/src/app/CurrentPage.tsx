import InGameWindow from 'features/inGameWindow/InGameWindow'
import DesktopWindow from 'features/desktopWindow/DesktopWindow'
import BackgroundWindow from 'features/backgroundWindow/BackgroundWindow'
import { WINDOW_NAMES } from './constants'

//window name in manifest file
const { BACKGROUND, DESKTOP, INGAME } = WINDOW_NAMES

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
