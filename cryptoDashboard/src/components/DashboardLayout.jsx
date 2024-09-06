import { Box, Container, Flex} from '@chakra-ui/react'
import React, { useState } from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'




function DashboardLayout({title, children}) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  console.log(isSidebarVisible);
  

  return (
    <div className="flex h-screen overflow-hidden">
      <SideNav isVisible={isSidebarVisible} closeSidebar={toggleSidebar} />

      
        <Box flexGrow={1}>
          <TopNav
            title={title}
            toggleSidebar={toggleSidebar}
            isSidebarVisible={isSidebarVisible}
          />


          <Container
            maxW="72rem"
            bg="red"
            p={4}
            className={`${
              isSidebarVisible ? 'ml-64' : 'ml-0'
            }`}
            
          >
            {children}
          </Container>
        </Box>
      </div>
    
  );
}

export default DashboardLayout