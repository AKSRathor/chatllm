import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chatbot from "./components/Chatbot.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chatbot/>
    </>
  )
}

export default App
