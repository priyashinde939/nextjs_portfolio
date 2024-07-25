"use client";

import ProductGrid3D from "@/components/ProductGrid3D";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import {Example} from '@/components/test/HorizontalScrollCarousel';
import { LabIntro } from '@/components/lab-cylinder/LabIntro';
import { Test } from "@/components/test/Test";
import Hero from "@/components/Hero";
import { Preloader }  from "@/components/Preloader";
import { Suspense } from "react";






const Home = () => {
  return (
    <main className="relative bg-black-400 flex justify-center items-center overflow-clip flex-col mx-auto ">
      
        <div className="w-full">
              <Hero />
              <LabIntro />
              <Example />
              <Grid />
              <Test />
              <ProductGrid3D />
              <Footer />
        </div>
    
    </main>
  );
};


export default Home;
