'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Image from 'next/image';
import pic from '../../public/5.jpg'






const Sticky: React.FC = () => {


    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });



    return (
            <div ref={container} className="relative h-[210vh] bg-black my-40 scroll-smooth">
                <Section1 scrollYProgress={scrollYProgress} />
                <Section2 scrollYProgress={scrollYProgress} />
            </div>
        
    );
};

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

    return (
        <motion.div
        transition={{ type: "spring", stiffness: 1 }}
        style={{ fontFamily: 'blackExpanded', scale, rotate }}
        className="sticky top-0 h-screen bg-black text-[3.5vw] py-[10vh] pl-2"
        
        >
        <Image src={pic} alt='svg' height={500}/>
        </motion.div>
    );
    
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

    return (
        <motion.div
        transition={{ type: "spring", stiffness: 10 }}
        style={{ scale, rotate }}
        className="absolute top-0 h-[110vh] width-full flex flex-auto pt-[10vh]"
        >
            <div className=" relative left-[28%] top-14 m-0 h-auto w-[600px] text-xl text-start p-3  ">
                    <h1 
                    className="relative mt-3 font-bold  text-red-700"> 
                    SED CONDIMENTUM MUS AUGUE LUCTUS .
                    </h1>
                    <div 
                        className="text-gray-500">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, ipsa quae abeaque ipsa quae ab illo ipsa quae abeaqueinventore veritatis 
                    
                        <h1 
                        className=" mt-3 font-bold text-sm text-gray-400"> 
                        SED CONDIMENTUM MUS AUGUE LUCTUS 
                        </h1>
                    </div>  
            </div>

            <div className="relative left-[18%] top-[45%] m-0 h-fit w-[500px] text-xl text-start p-3  ">
                    <h1 className="relative mt-3 font-bold  text-gray-400"> SED CONDIMENTUM MUS AUGUE LUCTUS .</h1>
                    <div 
                    className="text-gray-500">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, ipsa quae abeaque ipsa quae ab illo ipsa quae abeaqueinventore veritatis 
                    
                </div>        
            </div> 

        
            <div className="relative -left-[20%] top-[90%] mr-10 h-full w-[60vw] flex flex-col gap-10 text-white-200 text-3xl">

                <div className="relative w-[600px] h-fit ">
                    <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                    <div className="w-full h-[1px] my-8 bg-gray-700"></div>
                </div>
                <div className="relative w-[600px] h-fit">
                    <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                    <div className="w-full h-[1px] my-8 bg-gray-700"></div>
                </div>
                <div className="relative w-[600px] h-fit">
                    <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                    <div className="w-full h-[1px] my-8 bg-gray-700"></div>
                </div>
                <div className="relative w-[600px] h-fit">
                    <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                    <div className="w-full h-[1px] my-8 bg-gray-700"></div>
                </div>
                <div className="relative w-[600px] h-fit">
                    <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                    <div className="w-full h-[1px] my-8 bg-gray-700"></div>
                </div>
            </div> 
        
        </motion.div>
    );
};

export default Sticky;
