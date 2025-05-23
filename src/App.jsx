import { useState } from 'react'
import barkahLogo from './assets/profile-picture.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={barkahLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite - github - netify integration</h1>
      <h1>Made By Barkah</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
