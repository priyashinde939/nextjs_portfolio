import React from 'react';
import dynamic from 'next/dynamic';
import { Section } from './next/Next2';
const Scene = dynamic(()=> import('@/components/Scene'), {ssr:false});


const Hero = () => {
    return (
        <section 
        className="relative h-screen w-full bg-black-100 ">
				<Section />	
            <Scene />
        </section>
    )
}

export default Hero
