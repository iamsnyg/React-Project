import { Box, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import SideNav from './SideNav';
import DashboardLayout from './DashboardLayout';


function TopNav({title, toggleSidebar, isSidebarVisible}) {

  return (
    <Box
    
    >
        <HStack
        className='h-16 flex justify-between max-w-6xl  mx-auto border-l-2 border-solid border-blue-950'
        >
            <button
                onClick={toggleSidebar}
                className='lg:hidden block'
            >
                {isSidebarVisible ? "" : <TfiMenuAlt />}
            </button>

            <h1 className='text-2xl lg:text-3xl font-medium text-center lg:text-left'>{title}</h1>

            <Menu>
                <MenuButton>
                    <Icon as={MdAccountCircle} className='font-bold text-3xl'/>
                </MenuButton>

                <MenuList>
                    <MenuItem>Logout</MenuItem>
                    <MenuItem>Support</MenuItem>
                    
                </MenuList>
            </Menu>
        </HStack>
    </Box>
  )
}

export default TopNav