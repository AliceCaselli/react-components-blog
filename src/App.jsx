import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TheHeader />
      <main></main>
      <TheFooter />
    </>
  )
}

export default App
