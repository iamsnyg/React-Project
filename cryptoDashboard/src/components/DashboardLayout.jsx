import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'

function DashboardLayout({title, children}) {
  return (
    <Flex >
    <SideNav  />
    <Box flexGrow={1}>
        <TopNav title={title}  />
        <Box className='p-4'>
            {children}
        </Box>
        
    </Box>
    
</Flex>
  )
}

export default DashboardLayout