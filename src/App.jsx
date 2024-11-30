import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Home from './components/home/home'
// import Leaderboard from './components/leaderboard/leaderboard'
import Timer from './components/timer/timer'
import './App.css'
import {Route,Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     <Timer/>
      </div>
        
    </>
  )
}

export default App
