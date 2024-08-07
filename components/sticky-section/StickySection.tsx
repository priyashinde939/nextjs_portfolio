'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Pic1 from '../../public/confetti.gif';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';





const Sticky: React.FC = () => {


    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });



    return (
            <div ref={container} className="relative h-[200vh] bg-gray-900">
                <Section1 scrollYProgress={scrollYProgress} />
                <Section2 scrollYProgress={scrollYProgress} />
            </div>
        
    );
};

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 6]);

    return (
        <motion.div
        transition={{ type: "spring", stiffness: 10 }}
        style={{ fontFamily: 'blackExpanded', scale, rotate }}
        className="sticky top-0 h-screen bg-lime-400 text-[3.5vw] text-black flex flex-col items-center justify-center pb-[10vh]"
        
        >
        <p>Heading Heading</p>
        <div className="flex gap-5">
            <p>Section</p>
            <div className="relative w-[100px]">
            <Image src={Pic1} alt="img" fill />
            </div>
            <p>Transition</p>
        </div>
        <button className="w-[200px] h-[60px] rounded-full text-lg bg-purple-300 m-6">
            Click
        </button>
        </motion.div>
    );
    
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-6, 0]);

    return (
        <motion.div
        transition={{ type: "spring", stiffness: 10 }}
        style={{ fontFamily: 'black', scale, rotate }}
        className="relative h-screen bg-black flex flex-col text-6xl items-center justify-center text-white pb-[10vh]"
        >
        <div className="relative flex flex-col gap-5">
            <p>Image Container</p>
            <div className="rounded-full w-[24vw] h-[10vh] bg-gradient-to-r from-[#de462b] to-transparent"></div>
        </div>
        </motion.div>
    );
};

export default Sticky;
