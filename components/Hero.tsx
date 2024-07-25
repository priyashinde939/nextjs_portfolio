import React from 'react';
import AnimatedTextWord from './test/AnimatedTextWord';
import AnimatedTextCharacter from './test/AnimatedTextCharacter';
import dynamic from 'next/dynamic';
const Scene = dynamic(()=> import('@/components/Scene'), {ssr:false});


const Hero = () => {
    return (
        <section 
        className=" relative h-screen w-full bg-indigo-950 bg-opacity-30 bg-bgImg bg-cover ">
            <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF] " />
					<div className="w-2 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent" />
				</div>
				<div>
					<h1 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-white">
						Hey, I&apos;m <span className="text-[#915EFF] ">Priya</span>
					</h1>
					<p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
						A Creative Front-end Web Developer&nbsp;
						<br className="sm:block hidden" />& UI/UX Designer
					</p>
				</div>
			</div>
            <Scene />
        </section>
    )
}

export default Hero
