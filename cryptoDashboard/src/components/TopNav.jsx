import { Box, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { MdAccountCircle } from "react-icons/md";

function TopNav({title, parent}) {
  return (
    <Box
    className='shadow-md'
    >
        <HStack
        className='h-16 flex justify-between max-w-7xl px-32 mx-auto '
        >
            <h1 className='text-3xl font-medium '>{title}</h1>

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