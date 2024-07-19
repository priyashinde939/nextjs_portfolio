import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="relative bg-black h-screen w-full top-0 left-0 ">
      {/**
      <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center bg-stone-500">
      </div>*/}

      <div className="flex items-center justify-center relative pt-36 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs mb-0 text-center text-white-200 max-w-80">
            Dynamic Web Magic with Next.js
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl pt-0"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white-200">
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
          </p>

          <a href="#about">
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
