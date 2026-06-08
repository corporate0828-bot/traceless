import React from "react";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { GithubIcon } from "lucide-react";
import { SiteFooter } from "./Footer";
import { EyeCatchingButton_v1 } from "@/components/ui/shimmerButton";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeams } from "@/components/ui/bgBeams";

const Home = () => {
  const words = [
    { text: "Transfer" },
    { text: "anything" },
    { text: "securely" },
    { text: "with" },
    {
      text: "TraceLess.",
      className: "underline text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden h-[40rem]">
      <BackgroundBeams className="hidden md:block" />
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 z-0 block md:hidden"
        particleColor={"#FFFFFF"}
      />
      <TypewriterEffectSmooth words={words} />
      <p className="mt-3 max-w-2xl text-center text-sm sm:text-base text-muted-foreground">
        Secure, zero-trace file sharing for shared and public systems.
      </p>
      <p className="mt-2 max-w-2xl text-center text-sm text-muted-foreground/80">
        Send files privately with a clean, minimal experience designed for safety and simplicity.
      </p>
      <div className="mt-8 gap-3 flex justify-center z-10">
        <Link href="/share">
          <EyeCatchingButton_v1>Start sharing</EyeCatchingButton_v1>
        </Link>
        <Link
          href={"https://github.com/corporate0828-bot/traceless"}
          className="flex items-center"
        >
          <EyeCatchingButton_v1>
            <GithubIcon size={18} className="mr-2" />
            GitHub Repo
          </EyeCatchingButton_v1>
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Home;
