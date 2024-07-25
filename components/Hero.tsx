import React from 'react';
import AnimatedTextWord from './test/AnimatedTextWord';
import AnimatedTextCharacter from './test/AnimatedTextCharacter';
import dynamic from 'next/dynamic';
const Scene = dynamic(()=> import('@/components/Scene'), {ssr:false});


const Hero = () => {
    return (
        <section 
        className="relative h-screen w-full bg-black-100 ">
            <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
					<div className="flex flex-col justify-center items-center mt-5">
						<div className="w-6 h-6 rounded-full bg-[#8a9fff] " />
						<div className="w-2 sm:h-80 h-40 bg-gradient-to-b from-[#8a9fff] to-transparent" />
					</div>
				<div>
					<h1 className="flex flex-nowrap gap-4 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-white ">
						<AnimatedTextCharacter text="Hey, I&apos;m"/>
						<span className="text-[#8a9fff] ">
							<AnimatedTextCharacter text="Priya"/>
						</span>
						
					</h1>
					<div className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] ">
						<AnimatedTextCharacter text="A Creative Front-end Web Developer&nbsp;"/>
						<AnimatedTextCharacter text="& UI/UX Designer"/>
					</div>
				</div>
			</div>
            <Scene />
        </section>
    )
}

export default Hero
