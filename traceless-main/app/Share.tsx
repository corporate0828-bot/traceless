"use client";
import React from "react";
import ShareCard from "./ShareCard";
import Chat from "./Chat";
import { ShootingStars } from "@/components/ui/shootingStars";
import { StarsBackground } from "@/components/ui/starsBg";

const Share = () => {  
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-center gap-4 sm:gap-6 min-h-screen px-3 py-6 sm:py-8">
        <div className="flex items-center justify-center w-full lg:w-auto">
          <ShareCard />
        </div>
        <div className="flex items-center justify-center w-full lg:w-auto">
          <Chat/>
        </div>
        <ShootingStars />
        <StarsBackground />
      </div>
    </>
  );
};

export default Share;
