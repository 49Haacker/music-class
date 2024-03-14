import Link from "next/link";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../ui/moving-border";
import { SparklesCore } from "../ui/sparkles";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const HeroSection = () => {
  const words = [
    {
      text: "Master",
    },
    {
      text: "the",
    },
    {
      text: "art",
    },
    {
      text: "of",
    },
    {
      text: "Music",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <>
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="mt-28 p-4">
          <TypewriterEffectSmooth
            words={words}
            className="mt-20 md:mt-0  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          />

          <p className=" mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ad
            tempore porro perferendis excepturi quae esse, ullam ut quibusdam
            reprehenderit iure voluptate provident sint recusandae?
          </p>

          <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md mt-4">
            <Link href={"/courses"}>
              <Button borderRadius="1.75rem">Explore Courses</Button>
            </Link>

            <div className="w-full h-36 relative mt-1">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
