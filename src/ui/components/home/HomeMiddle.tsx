"use client";

import React from "react";
import { CiHome, CiBookmarkMinus, CiPlay1 } from "react-icons/ci";
import { FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TiLightbulb } from "react-icons/ti";
import { HiDotsVertical } from "react-icons/hi";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux";

const HomeMiddle = () => {
  const selectedDua = useAppSelector((state:RootState) => state.dua.selectedDua);
  if (!selectedDua) {
    return (
      <div className="h-[85vh] flex items-center justify-center text-[#7C827D] text-sm">
        Please select a Dua to view its details.
      </div>
    );
  }

  return (
    <div className="h-[85vh] overflow-y-auto custom-scroll">
      {/* Top breadcrumb */}
      <div className="bg-[#E1EBE1] px-3 md:px-10 py-3 text-[#417360] flex items-center gap-2 text-xs font-medium">
        <CiHome className="text-[#417360] text-xl" /> home <FaChevronRight /> ...
        <FaChevronRight /> Dua’s Importance <FaChevronRight />{" "}
        <span className="text-[#7C827D]">{selectedDua.title}</span>
      </div>

      {/* Section title bar */}
      <div className="bg-[#EEF6EB] px-10 py-3">
        <p className="text-[#417360] text-sm md:text-base font-semibold flex gap-2">
          Section:{" "}
          <span className="text-[#282E29] font-normal">{selectedDua.title}</span>
        </p>
      </div>

      {/* Loop through duas array */}
      <div className="px-10 mt-6 space-y-16">
        {selectedDua.duas?.map((item) => (
          <div key={item.id}>
            <p className="text-[#417360] font-semibold text-sm md:text-base flex gap-2 items-center">
              <IoSettingsOutline /> {item.id}. {item.heading}
            </p>

            <p className="text-[#417360] font-semibold text-sm md:text-base text-end mt-7">
              {item.arabic}
            </p>

            <p className="text-[#7C827D] font-normal italic text-sm md:text-base mt-7">
              {item.transliteration}
            </p>

            <p className="text-[#282E29] mt-7 font-semibold text-sm md:text-base">
              Translation
            </p>
            <p className="mt-2 text-sm md:text-base font-normal text-[#282E29]">
              {item.translation}
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-12">
              <div>
                <p className="text-[#7C827D] text-sm font-normal">Reference</p>
                <p className="text-sm font-medium">{item.reference}</p>
              </div>
              <div className="flex gap-5 text-lg md:text-xl text-[#709484]">
                <TiLightbulb />
                <CiBookmarkMinus />
                <CiPlay1 />
                <FaCalendarAlt />
                <HiDotsVertical />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMiddle;
