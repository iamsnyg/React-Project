import React, { useContext, useState } from 'react'
import SideNav from '../SideNav'
import TopNav from '../TopNav'
import { AppContext } from '../../utils/ContextProvider';

function Layout({children}) {

  // const {sharedData, setSharedData }=useContext(AppContext);

  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    
    
  };
  console.log(isSidebarVisible);

 
  
  

  return (

    
    <div
    className='flex '
    >
        <SideNav 
        isVisible={isSidebarVisible} closeSidebar={toggleSidebar} 
        
          
          
        
        />
        
        <div className='flex-col'>
        <TopNav 
        toggleSidebar={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
        
        />
        
          <div
          className={`${
            isSidebarVisible ? 'ml-0': 'ml-64'
          }`}
          >
            {children}
          </div>
        </div>
        
    </div>
    
  )
}

export default Layout