import React from 'react'
import { MdAccountCircle } from "react-icons/md";

import { TfiMenuAlt } from "react-icons/tfi";



function TopNav() {

    const toggleLinks=[
        {
            title: "Home"
        },
        {
            title: "About"
        },
        {
            title: "Services"
        },
        {
            title: "Contact"
        }
    ]

    const [toggle, setToggle] = React.useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (

    <div className='w-screen bg-gray-300 h-16'>
        
        <div className='flex justify-between items-center h-0 pb-3 mx-36 '>

        <div className='w-screen bg-gray-300 h-16'>
        


            <div className='flex justify-between items-center p-4 mx-36'>
                <h1 className='text-2xl font-bold '>Dashboard</h1>
                <button className=''>
                    <MdAccountCircle 
                    className='text-3xl'
                    onClick={handleToggle}
                    />
                    {
                        toggle && (
                            <div className='absolute top-16 right-32 bg-gray-300'>
                                {toggleLinks.map((link, index) => (
                                    <ul key={index}>
                                        <li className='p-2'>{link.title}</li>
                                    </ul>
                                ))}
                            </div>
                        )
                    }
                </button>
            </div>
        </div>
        
    </div>
    </div>
  ) 

}

export default TopNav