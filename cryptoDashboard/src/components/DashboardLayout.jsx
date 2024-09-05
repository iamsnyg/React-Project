import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'

function DashboardLayout({title, children}) {
    console.log(children)
  return (
    <Flex>
      <SideNav />
      <Box flexGrow={1}>
        <TopNav title={title} />
        
        <Container  maxW="72rem" bg="red"  p={4}>
            {children}
        </Container>
      </Box>
    </Flex>

  );
}

export default DashboardLayout