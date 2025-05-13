"use client";

import React from "react";
import { CiHome, CiBookmarkMinus, CiPlay1 } from "react-icons/ci";
import { FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TiLightbulb } from "react-icons/ti";
import { HiDotsVertical } from "react-icons/hi";


const sections = [
  {
    id: 1,
    heading: "The servant is dependent on his Lord #1",
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    transliteration: "Iyyaaka na'budu wa Iyyaaka nasta'een",
    translation:
      "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
    reference: "Surah Al-Fatir 35:15",
  },
  {
    id: 2,
    heading: "Trusting Allah in every affair",
    arabic: "وَعَلَى اللَّهِ فَتَوَكَّلُوا إِن كُنتُم مُّؤْمِنِينَ",
    transliteration: "Wa ‘ala Allah fatawakkaloo in kuntum mu’minin",
    translation:
      "And upon Allah rely, if you should be believers. This verse emphasizes trust in Allah as a core part of faith.",
    reference: "Surah Al-Ma'idah 5:23",
  },
  {
    id: 3,
    heading: "Supplication brings relief",
    arabic: "ادْعُونِي أَسْتَجِبْ لَكُمْ",
    transliteration: "Ud’ooni astajib lakum",
    translation:
      "Call upon Me; I will respond to you. Allah assures that He listens to the prayers of His servants.",
    reference: "Surah Ghafir 40:60",
  },
  {
    id: 4,
    heading: "Patience with prayer",
    arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    transliteration: "Wasta’eenoo bis sabri was salaat",
    translation:
      "Seek help through patience and prayer. Indeed, it is difficult except for the humbly submissive [to Allah].",
    reference: "Surah Al-Baqarah 2:45",
  },
];

const HomeMiddle = () => {
  return (
    <div className="h-[85vh] overflow-y-auto custom-scroll">
      {/* Top breadcrumb */}
      <div className="bg-[#E1EBE1] px-3 md:px-10 py-3 text-[#417360] flex items-center gap-2 text-xs font-medium">
        <CiHome className="text-[#417360] text-xl" /> home <FaChevronRight /> ... <FaChevronRight /> Dua’s Importance <FaChevronRight />{" "}
        <span className="text-[#7C827D]">The servant is depen</span>
      </div>

      {/* Section title bar */}
      <div className="bg-[#EEF6EB] px-10 py-3">
        <p className="text-[#417360] text-sm md:text-base font-semibold flex gap-2">
          Section:{" "}
          <span className="text-[#282E29] font-normal">
            The servant is dependent on his Lord
          </span>
        </p>
      </div>

      {/* Dynamic sections */}
      <div className="px-10 mt-6 space-y-16">
        {sections.map((item) => (
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

            <div className="flex flex-col  sm:flex-row justify-between items-start sm:items-center gap-4 mt-12">
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
