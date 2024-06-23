/*
 * @Author: kaka
 * @Date: 2024-06-23 23:52:29
 * @LastEditors: kaka
 * @LastEditTime: 2024-06-24 00:25:18
 * @FilePath: \vite-react\src\App.tsx
 * @Description:
 * wx:zjm19960705
 * Copyright (c) 2024 by kaka/zzc, All Rights Reserved.
 */
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(count)
  })
  console.log('commit 1.0')
  console.log('commit 2.0')
  console.log('commit 3.0')
  console.log('commit 4.0')
  console.log('commit 5.0')
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
