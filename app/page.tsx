"use client";

import ProductGrid3D from "@/components/ProductGrid3D";
import Footer from "@/components/Footer";
import { TextParallaxContentExample } from "@/components/TextParallaxContentExample";
import {HoverImageLinks} from "@/components/HoverImageLinks";
import Grid from "@/components/Grid";
import dynamic from 'next/dynamic';
const Scene = dynamic(()=> import('@/components/Scene'), {ssr:false})
import {Example} from '@/components/test/HorizontalScrollCarousel';
import { LabIntro } from '@/components/lab-cylinder/LabIntro';
import { Test } from "@/components/test/Test";




const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto ">
      <div className="w-full">
        <Scene />
        <LabIntro />
        <Example />
        <Grid />
        <Test />
        <ProductGrid3D />
        <TextParallaxContentExample />
        <HoverImageLinks />
        <Footer />
      </div>
    </main>
  );
};


export default Home;
