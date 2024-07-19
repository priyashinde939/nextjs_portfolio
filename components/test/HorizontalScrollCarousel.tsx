import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef } from "react";




export const Example = () => {
    return (
        <div className=" bg-purple-900 mt-20">
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                Scroll down
                </span>
            </div>
            <HorizontalScrollCarousel />
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                Scroll up
                </span>
            </div>
        </div>
    );
    };
    

    const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
 
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10">
                    {projects.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
    };

    const Card = ({ card }: { card: ProjectType }) => {
    return (
        <div
        key={card.id}
        className="group relative h-[400px] w-[600px] overflow-hidden bg-neutral-200"
        >
        <div
            style={{
            backgroundImage: `url(${card.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
            className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
            <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
            </p>
        </div>
        </div>
    );
    };



export default Example;

type ProjectType = {
img: string;
title: string;
id: number;
};


const projects: ProjectType[] = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        img: "/p1.svg",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",

        img: "/p2.svg",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        img: "/p3.svg",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        img: "/p4.svg",

    },
    {
        id: 5,
        title: "3D Solar System Planets to Explore",
        img: "/p1.svg",
    },
    {
        id: 6,
        title: "Yoom - Video Conferencing App",

        img: "/p2.svg",
    },
    {
        id: 7,
        title: "AI Image SaaS - Canva Application",
        img: "/p3.svg",
    },
    {
        id: 8,
        title: "Animated Apple Iphone 3D Website",
        img: "/p4.svg",

    },
];