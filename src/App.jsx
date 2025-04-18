import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Greet from './components/Greet'
import Test from './components/test'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <body>
     <Test/>
     <Hero/>
     </body>
    </>
  )
}

export default App
