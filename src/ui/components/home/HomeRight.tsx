'use client';

import { useState } from 'react';
import { RiFontSize2 } from 'react-icons/ri';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { BsFillEyeFill } from 'react-icons/bs';
import { MdOutlineColorLens } from 'react-icons/md';

const HomeRight = () => {
  const [arabicFontSize, setArabicFontSize] = useState(28);
  const [translationFontSize, setTranslationFontSize] = useState(28);

  return (
    <div className="px-5 py-4  rounded-xl  w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button className="bg-[#D8E7D3] p-2 rounded-full">
            <RiFontSize2 className="text-[#417360]" />
          </button>
          <p className="text-sm font-medium">Font Settings</p>
        </div>
        <IoIosArrowUp className="text-[#417360]" />
      </div>

      {/* Arabic Font Size */}
      <div className="mt-5">
        <label className="text-sm font-medium">Arabic Font Size</label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={10}
            max={40}
            value={arabicFontSize}
            onChange={(e) => setArabicFontSize(Number(e.target.value))}
            className="w-full accent-[#417360]"
          />
          <span className="text-sm">{arabicFontSize}</span>
        </div>
      </div>

      {/* Translation Font Size */}
      <div className="mt-5">
        <label className="text-sm font-medium">Translation Font Size</label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={10}
            max={40}
            value={translationFontSize}
            onChange={(e) => setTranslationFontSize(Number(e.target.value))}
            className="w-full accent-[#417360]"
          />
          <span className="text-sm">{translationFontSize}</span>
        </div>
      </div>

      {/* Font Face Dropdown */}
      <div className="mt-5">
        <label className="text-sm font-medium block mb-1">
          Arabic Script & Font Face
        </label>
        <div className="bg-[#F1F5F3] rounded-md flex justify-between items-center px-4 py-2 cursor-pointer">
          <span className="text-sm text-[#282E29] font-noraml">Uthma</span>
          <IoIosArrowUp />
        </div>
      </div>

      {/* View Settings */}
      <div className="mt-5">
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="bg-[#D8E7D3] p-2 rounded-full">
              <BsFillEyeFill className="text-[#417360]" />
            </div>
            <p className="text-sm font-medium">View Settings</p>
          </div>
          <IoIosArrowDown />
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="mt-5">
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="bg-[#D8E7D3] p-2 rounded-full">
              <MdOutlineColorLens className="text-[#417360]" />
            </div>
            <p className="text-sm font-medium text-[#282E29]">Appearance Settings</p>
          </div>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
