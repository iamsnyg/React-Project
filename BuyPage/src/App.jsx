import { useState } from 'react'
// import from './assets'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
        <div className="">
          <img src="./assets/brand_logo.png" alt="logo" />
        </div>

        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>

        <button className='bg-blue-400'  >login</button>
      </nav>
    </>
  )
}

export default App
