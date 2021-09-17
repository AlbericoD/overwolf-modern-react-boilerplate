import { useEffect, useState, Suspense } from 'react'
import { CurrentPage } from './CurrentPage'
import { Loading } from 'components/Loading'
import { WINDOW_NAMES } from './constants'
import { getCurrentWindow } from 'utils'
import './App.css'

//This is the main component of the app, it is the root of the app
//each Page component is rendered in a different window
//if NODE_ENV is set to development, the app will render in a window named 'dev'
export const App = () => {
  const [page, setPage] = useState<string>('')

  useEffect(() => {
    async function preLoad() {
      if (process.env.NODE_ENV === 'development') {
        //you can set the current window to dev if you want to see the dev page <Normal Browser>
        setPage(WINDOW_NAMES.DESKTOP)
      } else {
        const currentWindow = await getCurrentWindow()
        setPage(currentWindow)
        console.info(
          '[🐺 overwolf-modern-react-boilerplate][🧰 src/app/App.tsx][🔧 useEffect - preLoad]',
          JSON.stringify({ currentWindow }, null, 2),
        )
      }
    }
    preLoad()
  }, [])
  //this is fallback for the loading current screen
  return (
    <Suspense fallback={<Loading />}>
      <CurrentPage page={page} />
    </Suspense>
  )
}
