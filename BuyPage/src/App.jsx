// import { useState } from 'react'
// import from './assets'

import './App.css'

function App() {

  return (
    <>
    <nav>
        <div className="">
          <img src="/images/brand_logo.png" alt="logo" />
          {/* <img src="/src/assets/shoe_image.png" alt="shoe" /> */}
        </div>

        <ul>
          <li href="#">MENU</li>
          <li href="#" className='font-Nerko One'>HOME</li>
          {/* '>LOCATION</li> */}
          <li href="#" 
          className='font-display'>LOCATION</li>
          {/* >ABOUT</li> */}
          <li href="#">CONTACT</li>
        </ul> 

         <button className='bg-blue-300 rounded-md p-2 shadow-md ' >hello</button>
      
      </nav>

    </>
  )
}

export default App
