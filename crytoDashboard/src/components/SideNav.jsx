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
    <div className=" max-w-64 min-h-screen ">
        <div className="flex flex-col justify-between h-screen">

            <div
            className="pt-14 items-center justify-center "
            >
                <h1 className="text-2xl text-purple-600 font-bold pl-3">@DOSOMECODING</h1>
                <div
                className="p-7"
                >
                {navLinks.map((link, index) => (
                    <ul key={index}>
                        <li className="flex items-center gap-4 pb-3">
                            {link.icon}
                            {link.title}
                        </li>
                    </ul>
                ))}
                </div>
            </div>
            <div
            className=" w-64 flex flex-col items-center justify-stretch" 
            
            >
                <button 
                className="flex items-center gap-2 bg-slate-100 rounded-xl p-2 w-56  "
                >
                    <BiSupport />
                    Support
                </button>
            </div>
        </div>
    </div>
);
}

export default SideNav;
