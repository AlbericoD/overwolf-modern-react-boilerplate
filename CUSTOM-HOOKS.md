<h1 align="center">
  Custom Hooks
</h1>
<p align="center">
there are some custom hooks to help use overwolf api with the new react hooks technology.
</p>

## How to use
 If you are not familiar with React hooks, take a look at [the documentation](https://reactjs.org/docs/hooks-intro.html)

### Hooks
1. [**useWindow.ts**](https://github.com/AlbericoD/overwolf-modern-react-boilerplate/blob/master/src/hooks/useWindow.ts)
  ```TSX
    Example.js
    import React from "react";
    import { useWindow } from 'hooks'

    const Panel:FC = ()=>{
    const [desktopWindow] = useWindow(DESKTOP);

        return <>
          <p>Desktop Window</p>
          <button onClick={()=> desktopWindow?.minimize()}>Minimize</button>
          <button onClick={()=> desktopWindow?.restore()}>Restore</button>
          <button onClick={()=> desktopWindow?.maximize()}>Maximize</button>
          <button onClick={()=> desktopWindow?.close()}>Close</button>
        </>
    }
  ```
