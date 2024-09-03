import { Box, HStack, Icon, Stack } from '@chakra-ui/react'
import React from 'react'
import { PiSquaresFourFill } from "react-icons/pi";

function Dashboard() {

    const sideNavLinks=[
        {
            icon: PiSquaresFourFill,
            title: 'Dashboard',

        },
        {
            icon: PiSquaresFourFill,
            title: 'Transaction',

        },

    ]
  return (
    <Box >
        <Stack>
            {sideNavLinks.map((nav)=>{
                return(
                    <HStack>
                        <Icon as={nav.icon} />
                        
                            <div>
                                {nav.title}
                            </div>
                        
                    </HStack>
                )
            })}
        </Stack>
    </Box>
  )
}

export default Dashboard