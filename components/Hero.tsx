import React from 'react';
import dynamic from 'next/dynamic';
const Scene = dynamic(()=> import('@/components/Scene'), {ssr:false});


const Hero = () => {
    return (
        <section 
        className="relative h-screen w-full bg-black-100 ">
            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
					<div className="flex flex-col justify-center items-center mt-5">
						<div className="w-6 h-6 rounded-full bg-[#8a9fff] " />
						<div className="w-2 sm:h-80 h-40 bg-gradient-to-b from-[#8a9fff] to-transparent" />
					</div>
				<div>
					<h1 className="font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ">
						Hey, I&apos;m Priya
					</h1>
					<div className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] ">
						<div>A Creative FrontEnd Web Developer&nbsp;</div>
						<div>& UI/UX Designer</div>
					</div>
				</div>
			</div>
            <Scene />
        </section>
    )
}

export default Hero
