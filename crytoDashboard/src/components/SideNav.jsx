import React from "react";
// import { PiSquaresFourFill } from "react-icons/pi";
import { PiSquaresFourFill } from "react-icons/pi";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function SideNav() {

    const navLinks=[
        {
            title: "Dashboard",
            icon: <PiSquaresFourFill />,
        },
        {
            title: "Transcation",
            icon: <TbArrowsDoubleNeSw />,
        },
        
    
    ]
return (
    <div className="bg-zinc-500 max-w-64 min-h-screen ">
        <h1 className="text-2xl text-black font-bold">@DOSOMECODING</h1>

        <div className="flex flex-col justify-center">
            <div>
                {navLinks.map((link, index) => (
                    <ul key={index}>
                        <li className="flex items-center gap-2">
                            {link.icon}
                            {link.title}
                        </li>
                    </ul>
                ))}
            </div>
            <div>
                <h2 
                className="flex items-center gap-2"
                >
                    <BiSupport />
                    Support
                </h2>
            </div>
        </div>
    </div>
);
}

export default SideNav;
