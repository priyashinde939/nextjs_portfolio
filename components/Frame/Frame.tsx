'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import pic1 from '../../public/6.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Frame: React.FC = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -20]);

    return (
        <section ref={container} className="relative h-[350vh] bg-white">
        <div className="sticky top-0 h-[100vh] bg-black">
            <div className="w-full h-full absolute top-0 flex items-center justify-center overflow-hidden">
            <motion.div style={{ scale, rotate }} className="w-[25vw] h-[25vw] relative">
                <Image src={pic1} alt="image" placeholder="blur" objectFit="cover" />
            </motion.div>
            </div>
        </div>
        </section>
    );
};
