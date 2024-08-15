import React from 'react';
import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import Sticky from "@/components/sticky-section/StickySection";
import Marquee from "@/components/marquee/Marquee";
import { Frame } from "@/components/Frame/Frame";
import  Sec  from "@/components/test/NextImage";
import { LabIntroc } from '@/components/lab-cylinder/LabIntroc';
import Loader from '@/components/Loader/index';
import { Last } from '@/components/last/last';
import NextImagee from '@/components/test/NextImagee';





const Home = () => {


  return (
    <main className="relative bg-black-400 flex justify-center items-center overflow-clip flex-col mx-auto">
      <div className="w-full">
        <Hero />
        <Frame />
        <Marquee />
        <Sticky />
        <Sec />
        <LabIntroc />
        <Last />
        <NextImagee />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
