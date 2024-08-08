import React from 'react';
import Footer from "@/components/Footer";
import { LabIntro } from '@/components/lab-cylinder/LabIntro';
import Hero from "@/components/Hero";
import Sticky from "@/components/sticky-section/StickySection";
import Marquee from "@/components/marquee/Marquee";
import { Frame } from "@/components/Frame/Frame";
import { Sec } from "@/components/next/Next";
import { Section } from "@/components/next/Next2";


const Home = () => {


  return (
    <main className="relative bg-black-400 flex justify-center items-center overflow-clip flex-col mx-auto">
      <div className="w-full">
        <Hero />
        <Sticky />
        <LabIntro />
        <Frame />
        <Marquee />
        <Sec />
        <Section />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
