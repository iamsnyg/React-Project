import React from 'react'
import SideNav from '../SideNav'
import TopNav from '../TopNav'

function Layout() {

    const [isSideNavOpen, setIsSideNavOpen] = React.useState(true)

    const handleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen)
    }
  return (

    
    <div
    className='flex'
    >
        <SideNav 
        isSideNavOpen={isSideNavOpen}       
        />
        <TopNav 
        handleSideNav={handleSideNav}
        />
    </div>
  )
}

export default Layout