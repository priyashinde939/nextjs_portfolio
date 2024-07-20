"use client";

import ProductGrid3D from "@/components/ProductGrid3D";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import { TextParallaxContentExample } from "@/components/TextParallaxContentExample";
import {HoverImageLinks} from "@/components/HoverImageLinks";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import dynamic from 'next/dynamic';
const Scene = dynamic(()=> import('@/components/Scene'), {ssr:false})
import { ModelViewer } from '../components/ModelViewer';
import {Base} from '@/components/test/Base';
import {Example} from '@/components/test/HorizontalScrollCarousel';
import { LabIntro } from '@/components/lab-cylinder/LabIntro';
import { HorizontalMarquee } from "@/components/horizontal-marquee/HorizontalMarquee";




const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto ">
      <div className="w-full">
        <Scene />
        <HorizontalMarquee />
        <Example />
        <Base />
        <Grid />
        <Experience />
        <ProductGrid3D />
        <TextParallaxContentExample />
        <HoverImageLinks />
        <ModelViewer />
        <Footer />
      </div>
    </main>
  );
};


export default Home;
