
import Footer from "@/components/Footer";
import { LabIntro } from '@/components/lab-cylinder/LabIntro';
import Hero from "@/components/Hero";
import Sticky from "@/components/sticky-section/StickySection";
import React from 'react';
import Marquee from "@/components/marquee/Marquee";






const Home = () => {


  
  return (
    <main className="relative bg-black-400 flex justify-center items-center overflow-clip flex-col mx-auto ">
      
        <div className="w-full">
              <Hero />
              <Sticky />
              <Marquee />
              <LabIntro />
              <Footer />
        </div>
    
    </main>
  );
};


export default Home;
