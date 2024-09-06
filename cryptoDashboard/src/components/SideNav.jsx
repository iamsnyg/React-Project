import { Box, HStack, Icon, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { PiSquaresFourFill} from "react-icons/pi";
import { TbArrowsDoubleNwSe } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function SideNav({ isVisible, closeSidebar}) {

    const sideNavLinks=[
        {
            icon: PiSquaresFourFill,
            title: 'Dashboard',

        },
        {
            icon: TbArrowsDoubleNwSe,
            title: 'Transaction',

            
        },
    ]
  return (
    <Box className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 
        ${isVisible ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:flex-shrink-0`}>
        <Stack className={`flex justify-between  max-w-64 h-screen 
        
        `}>
            <Box
            >
                <button
                onClick={closeSidebar}
                className={`p-2 bg-red-500 text-black rounded-full lg:hidden`}
                >
                    X
                </button>
                <h1 className='text-xl pt-16 font-bold text-center'>Crypto Dashboard</h1>
                <Box className='mt-6 mx-3'>
                    {sideNavLinks.map((nav)=>{
                        return(
                            <HStack key={nav.title} className='py-3 px-4 rounded-md hover:bg-gray-200 hover:text-gray-900'>
                                <Icon as={nav.icon} />
                                
                                    <p>
                                        {nav.title}
                                    </p>
                                
                            </HStack>
                            
                        )
                    }
                    )}
                
                </Box>
            </Box>
            <Box className='mt-6 mx-3' >
                <HStack className='py-3 px-4 hover:bg-gray-200 hover:text-gray-900 rounded-md'>
                        <Icon as={BiSupport} />
                            
                        <p>
                            Support
                        </p>
                            
                </HStack>
            </Box>
            
        </Stack>
    </Box>
  )
}

export default SideNav