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
import Planet from '@/components/Planet/Planet';





const Home = () => {


  return (
    <main className="relative bg-black-400 flex justify-center items-center overflow-clip flex-col mx-auto">
      <Loader />
      <div className="w-full">

        <Planet />
        <Frame />
        <Marquee />
        <Sticky />
        <Sec />
        <LabIntroc />
        <Last />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
