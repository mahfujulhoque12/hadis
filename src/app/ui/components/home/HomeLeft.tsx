"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { TbArrowNarrowRightDashed } from "react-icons/tb";
import duaList from "@/data/homeLeftData";

const HomeLeft = () => {
  const [openIds, setOpenIds] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredDuaList = duaList.filter((dua) =>
    dua.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="h-[85vh] overflow-y-auto  custom-scroll">
      {/* Search */}
      <div className="flex gap-2 items-center px-4 py-2 mt-6 rounded-full bg-[#E1EBE166] border border-[#E1EBE1]">
        <CiSearch />
        <input
          placeholder="Search by Dua Categories"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="placeholder:text-[#7C827D] placeholder:text-sm placeholder:font-normal bg-transparent focus:outline-none w-full"
        />
      </div>

      {/* Dua List */}
      {filteredDuaList.length > 0 ? (
        filteredDuaList.map((dua) => {
          const isOpen = dua.alwaysOpen || openIds.includes(dua.id);
          return (
            <div key={dua.id}>
              <button
                onClick={() => !dua.alwaysOpen && toggle(dua.id)}
                className="flex items-center gap-2 mt-6 cursor-pointer"
              >
                <Image
                  src={dua.icon}
                  width={100}
                  height={100}
                  alt="icon"
                  className="h-11 w-11"
                />
                <div>
                  <p className="text-sm font-medium text-[#282E29]">
                    {dua.title}
                  </p>
                  <p className="text-[#7C827D] text-sm font-normal">
                    {dua.meta}
                  </p>
                </div>
              </button>

              {isOpen && (
                <div className="pl-4 mt-5 border-l-2 border-dashed border-gray-300">
                  {/* First two lines as headers */}
                  {dua.content.lines.slice(0, 2).map((line, index) => (
                    <p
                      key={index}
                      className={`${
                        index === 1
                          ? "font-semibold text-[#417360] mt-4"
                          : ""
                      } text-sm text-[#282E29]`}
                    >
                      {line}
                    </p>
                  ))}

                  {/* Remaining lines as list */}
                  <ul className="mt-2 space-y-1 pl-4">
                    {dua.content.lines.slice(2).map((line, idx) => (
                      <li key={idx} className="flex items-start gap-1 mt-4">
                        <TbArrowNarrowRightDashed className="text-[#282E29]" />
                        <span className="text-sm font-normal">{line}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-normal text-[#282E29] mt-4">
                    {dua.moto}
                  </p>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <p className="text-center mt-8 text-sm text-[#7C827D]">No results found.</p>
      )}
    </div>
  );
};

export default HomeLeft;
