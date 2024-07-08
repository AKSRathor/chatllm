import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chatbot from "./components/Chatbot.jsx"
import './App.css'
const myfunc = async()=> {
  const response = await fetch(`https://llm-verifier.vercel.app/selectmodel`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ })
  })
  await response.json()

}
myfunc()

function App() {
  

return (
  <>
    <Chatbot />
  </>
)
}

export default App
