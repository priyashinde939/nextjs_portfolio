"use client";

import { useEffect, useMemo } from "react";
import { useAnimate, stagger } from "framer-motion";

export default function Home() {
const [scope, animate] = useAnimate();
const words = useMemo(() => ["Hola,", "Kamusta,", "Hi,"], []);

useEffect(() => {
const animateWords = async () => {
    await animate(
    "li",
    { y: ["100%", "0%", "-100%", "100%"] },
    {
        duration: 3.75,
        times: [0, 0.33, 0.66, 0.66], // 1.25s for each stage
        ease: [0.33, 1, 0.68, 1],
        delay: stagger(1.25),
        repeat: Infinity,
        repeatType: "loop",
    },
    );
};

animateWords();
}, [animate, scope]);

return (
<main className=" flex flex-col justify-center h-screen p-20">
    <h1 className="inline-flex text-6xl leading-snug">
    Hmm&nbsp;
    <ul
        className="inline-flex relative overflow-hidden w-full"
        // className="inline-flex relative w-full"
        ref={scope}
    >
        {words.map((word) => (
        <li key={word} className="absolute top-0 left-0 translate-y-[100%]">
            {word}
        </li>
        ))}
    </ul>
    </h1>
</main>
);
}