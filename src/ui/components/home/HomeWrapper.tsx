"use client";
import React, { useState } from "react";
import HomeLeft from "./HomeLeft";
import HomeMiddle from "./HomeMiddle";
import HomeRight from "./HomeRight";

interface HomeLeftProps {
  onOptionClick: () => void; // Add the onOptionClick prop
}


const HomeWrapper:React.FC<HomeLeftProps> = () => {
   const [, setIsSidebarOpen] = useState(false);

  const handleSidebarOptionClick = () => {
    setIsSidebarOpen(false); 
  };

  return (
    <div className="flex w-full">
      {/* Left Sidebar */}
      <div className="hidden lg:block w-1/5">
        <HomeLeft onOptionClick={handleSidebarOptionClick}/>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/5">
        <HomeMiddle />
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block w-1/5">
        <HomeRight />
      </div>
    </div>
  );
};

export default HomeWrapper;
