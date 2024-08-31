import React from 'react'

function Navbar() {
  return (
    <>
      <nav className='flex justify-between max-w-screen-xl m-auto h-18 items-center'>
        <div className="">
          <img src="/images/brand_logo.png" alt="logo" />
          {/* <img src="/src/assets/shoe_image.png" alt="shoe" /> */}
        </div>

        <ul className='font-map flex gap-10 ' >
          <li href="#">MENU</li>
          <li href="#" >Location</li>         
          <li href="#" >About</li>
          <li href="#">CONTACT</li>
        </ul> 

         <button className='bg-blue-300 rounded-md p-2 shadow-md ' >Login</button>
      
      </nav>
    
    </>
  )
}

export default Navbar