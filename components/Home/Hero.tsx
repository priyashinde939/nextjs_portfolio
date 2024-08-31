import React from 'react';
import dynamic from 'next/dynamic';
import { Section } from './homeContent';
const Scene = dynamic(()=> import('@/components/Home/Scene'), {ssr:false});


const Hero = () => {
    return (
        <section 
        className="a h-screen w-full bg-black-100 ">
				<Section />	
            <Scene />
        </section>
    )
}

export default Hero
