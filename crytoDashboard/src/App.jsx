import React from 'react'
import './App.css'
import SideNav from './components/SideNav'
import Dashbaord from './Dashboard/Dashbaord'
import { FaCoffee } from 'react-icons/fa';  // Font Awesome icon
import { MdPerson } from 'react-icons/md';  // Material Design icon
import { AiFillCar } from 'react-icons/ai'; // Ant Design icon


function App() {
  return (
    <>
      <Dashbaord />
      {/* <ul className="flex space-x-6 list-none">
      <li className="flex items-center">
        <FaCoffee /> <span className="ml-2">Coffee Time</span>
      </li>
      <li className="flex items-center">
        <MdPerson /> <span className="ml-2">Profile</span>
      </li>
      <li className="flex items-center">
        <AiFillCar /> <span className="ml-2">Car</span>
      </li>
    </ul> */}
    </>
  )
}

export default App

