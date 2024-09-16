import React from "react";
import { MdAccountCircle } from "react-icons/md";

import { TfiMenuAlt } from "react-icons/tfi";

function TopNav({toggleSidebar, isSidebarVisible}) {
  const toggleLinks = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Services",
    },
    {
      title: "Contact",
    },
  ];

  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={`w-screen h-16 ${
        isSidebarVisible ?  'ml-0':'ml-64' 
      }`}>
      

      <div className="flex ">
      <button 
      onClick={toggleSidebar}
      // className='lg:hidden block'
      >
        <TfiMenuAlt />
      </button>
        <div
        className="flex justify-between items-center w-full p-4 mx-36 "
        >
        <h1 className="text-2xl font-bold ">Dashboard</h1>
        <button className="">
          <MdAccountCircle className="text-3xl" onClick={handleToggle} />
          {toggle && (
            <div className="absolute top-16 right-32 bg-gray-300">
              {toggleLinks.map((link, index) => (
                <ul key={index}>
                  <li className="p-2">{link.title}</li>
                </ul>
              ))}
            </div>
          )}
        </button>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
