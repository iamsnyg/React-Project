import { Box, Container, Flex} from '@chakra-ui/react'
import React, { useState } from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'




function DashboardLayout({title, children}) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div
    className='flex h-screen overflow-hidden'
    >
      <SideNav isVisible={isSidebarVisible} closeSidebar={toggleSidebar} />

      <Box flexGrow={1}>
        <TopNav
          title={title}
          toggleSidebar={toggleSidebar}
          isSidebarVisible={isSidebarVisible}
          className={`${isSidebarVisible ? "" : ""}`}
        />

        <Container maxW="72rem" bg="red" p={4}>
          {children}
        </Container>
      </Box>
    </div>
  );
}

export default DashboardLayout