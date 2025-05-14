"use client";

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import sidebarLogo from "/public/sidebar/logo.png";
import category from "/public/sidebar/category.png";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiBookmarkMinus } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside
      className={clsx(
        "hidden  fixed top-0 left-0 h-full bg-[#EEF6EB] text-white z-40 w-16 lg:flex flex-col justify-between gap-8 items-center py-4 transition-transform duration-300"
      )}
    >
      {/* top logo */}
      <div className="h-16 flex items-center justify-center">
        <Image
          src={sidebarLogo}
          width={100}
          height={100}
          alt="sidebar logo"
          className="h-11 w-11"
        />
      </div>

      {/* middle nav */}
      <nav className="flex flex-col items-center gap-4">
      
        
              <Link
          href="/profile"
          className="relative flex items-center justify-center transition-all duration-300 text-[#709484] p-2 rounded-md "
        >
          <div className="group relative flex items-center justify-center">
            <Image
            src={category}
            width={100}
            height={100}
            alt="category"
            className="h-11 w-11"
          />
            <p className="absolute left-full ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition duration-300 pointer-events-none">
                  Category
            </p>
          </div>
        </Link>
    

              <Link
          href="/profile"
          className="relative flex items-center justify-center transition-all duration-300 text-[#709484] p-2 rounded-md hover:bg-[#D8E7D3]"
        >
          <div className="group relative flex items-center justify-center">
            <BiCategoryAlt size={22} />
            <p className="absolute left-full ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition duration-300 pointer-events-none">
                          Dua
            </p>
          </div>
        </Link>

     
       
           <Link
          href="/profile"
          className="relative flex items-center justify-center transition-all duration-300 text-[#709484] p-2 rounded-md hover:bg-[#D8E7D3]"
        >
          <div className="group relative flex items-center justify-center">
            <FaRegLightbulb size={22} />
            <p className="absolute left-full ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition duration-300 pointer-events-none">
                           Sunnah
            </p>
          </div>
        </Link>

        
           <Link
          href="/profile"
          className="relative flex items-center justify-center transition-all duration-300 text-[#709484] p-2 rounded-md hover:bg-[#D8E7D3]"
        >
          <div className="group relative flex items-center justify-center">
            <CiBookmarkMinus size={22} />
            <p className="absolute left-full ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition duration-300 pointer-events-none">
                           Bookmark
            </p>
          </div>
        </Link>


      

           <Link
          href="/profile"
          className="relative flex items-center justify-center transition-all duration-300 text-[#709484] p-2 rounded-md hover:bg-[#D8E7D3]"
        >
          <div className="group relative flex items-center justify-center">
            <CiBookmarkPlus size={22} />
            <p className="absolute left-full ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition duration-300 pointer-events-none">
                          Requya
            </p>
          </div>
        </Link>

      
            <Link
          href="/profile"
          className="relative flex items-center justify-center transition-all duration-300 text-[#709484] p-2 rounded-md hover:bg-[#D8E7D3]"
        >
          <div className="group relative flex items-center justify-center">
            <MdOutlineMenuBook size={22} />
            <p className="absolute left-full ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition duration-300 pointer-events-none">
                    New Added
            </p>
          </div>
        </Link>
      </nav>

      {/* bottom nav */}
      <nav className="flex flex-col items-center gap-4 pb-4">
        <Link
          href="/profile"
          className="relative flex items-center justify-center transition-all duration-300 text-[#709484] p-2 rounded-md hover:bg-[#D8E7D3]"
        >
          <div className="group relative flex items-center justify-center">
            <IoTrophyOutline size={22} />
            <p className="absolute left-full ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition duration-300 pointer-events-none">
              Rewards
            </p>
          </div>
        </Link>

        <Link
          href="#"
          className="relative flex items-center justify-center transition-all duration-300 hover:bg-[#D8E7D3] text-[#709484] p-2 rounded-md"
        >
          <div className="relative flex items-center justify-center">
            <div className="group relative flex items-center justify-center">
              <IoMenu size={22} />
              <p className="pointer-events-none absolute left-full ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition duration-300">
                Menu
              </p>
            </div>
          </div>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
