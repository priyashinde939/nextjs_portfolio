import React , { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%"; 
}

export const Reveal = ({children, width = "fit-content"}:Props) => {
return (
    <div 
    className='relative overflow-hidden'>
        <motion.div
        variants={{
            hidden:{opacity: 0, y: 75},
            visible:{opacity:1, y: 0}
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay:1}}
        >
            {children}
        </motion.div>
    </div>
);
};