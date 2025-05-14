'use client';
import { useState } from 'react';
import topbar from '/public/sidebar/top-logo.png';
import icon from '/public/sidebar/icon.png';
import icon2 from '/public/sidebar/icon2.png';
import af from '/public/flags/af.svg';
import bd from '/public/flags/bd.svg';
import pa from '/public/flags/pa.svg';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { CiPaperplane } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import HomeLeft from '@/ui/components/home/HomeLeft'; 
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { openSidebar, closeSidebar } from "@/redux/feature/uiSlice";

const Topbar = () => {
  const [selected, setSelected] = useState('en');
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state: RootState) => state.ui.isSidebarOpen);

  const languages = [
    { code: 'en', label: 'AF', flag: af },
    { code: 'bn', label: 'BN', flag: bd },
    { code: 'fr', label: 'PA', flag: pa },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  const currentLang = languages.find(lang => lang.code === selected);

  // Close the sidebar when an option is clicked
  const handleSidebarOptionClick = () => {
    dispatch(closeSidebar());
  };

  return (
    <>
      <header className="h-16 bg-[#FBFFFB] shadow fixed left-0 right-0 top-0 z-30 flex items-center px-4 md:pl-20">
        <div className="flex items-center justify-between gap-5 p-2 w-full">
          {/* Left part */}
          <div className="text-sm text-gray-800 flex items-center gap-3">
            <button
              className="cursor-pointer bg-[#EEF6EB] rounded-full p-2 lg:hidden"
              onClick={() => dispatch(openSidebar())}
            >
              <FaBars size={24} />
            </button>

            <Image src={topbar} alt="top-bar" width={900} height={500} className="w-32 h-10" />
          </div>

          {/* Right part */}
          <div className="flex items-center gap-3">
            <Link href="">
              <Image src={icon} alt="icon1" width={900} height={500} className="w-8 h-8" />
            </Link>
            <Link href="">
              <Image src={icon2} alt="icon2" width={900} height={500} className="w-8 h-8" />
            </Link>

            {/* Language Selector */}
            <div className="relative hidden lg:block">
              <select
                value={selected}
                onChange={handleChange}
                className="bg-[#E1EBE199] border pl-8 pr-10 py-2 text-sm rounded-full text-gray-800 border-gray-300 appearance-none focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>

              {currentLang && (
                <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Image src={currentLang.flag} alt={currentLang.label} width={20} height={20} />
                </div>
              )}

              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                <IoIosArrowDown size={16} />
              </span>
            </div>

            <button className="hidden bg-[#417360] text-white sm:flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              Support Us <CiPaperplane />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen w-full sm:w-[300px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <p className="text-lg font-semibold">Menu</p>
          <button onClick={() => dispatch(closeSidebar())} className="text-gray-500 text-xl">
            <IoMdClose />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
          <HomeLeft onOptionClick={handleSidebarOptionClick} />
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={() => dispatch(closeSidebar())} // Close sidebar on overlay click
        ></div>
      )}
    </>
  );
};

export default Topbar;
