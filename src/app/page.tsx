'use client';
import HomeWrapper from "@/ui/components/home/HomeWrapper";

export default function Home() {
  const onOptionClick = () => {
  
    console.log("Option clicked, closing sidebar...");
  };

  return <HomeWrapper onOptionClick={onOptionClick} />;
}
