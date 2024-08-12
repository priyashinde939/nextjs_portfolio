'use client';

import Image from 'next/image';
import { useRef } from 'react';
import pic1 from '../../public/next.svg';
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
        <section ref={container} className="relative h-[200vh] bg-white">
        <div className="sticky top-0 h-[100vh] bg-black">
            <div className="w-full h-full absolute top-0 flex items-center justify-center overflow-hidden">
            <motion.div style={{ scale, rotate }} className="relative">
                <Image src={pic1} alt="image" placeholder="empty"  width={100}
                fetchPriority='low'/>
            </motion.div>
            </div>
        </div>
        </section>
    );
};
