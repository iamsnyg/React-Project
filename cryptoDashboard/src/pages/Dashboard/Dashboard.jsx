import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SideNav from '../../components/SideNav'
import TopNav from '../../components/TopNav'

function Dashboard() {
  return (
    <Box>
        <Flex >
            <SideNav />
            <Box flexGrow={1}>
                <TopNav />
            </Box>
        </Flex>
    </Box>
  )
}

export default Dashboard