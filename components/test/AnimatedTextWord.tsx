import React, { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

interface AnimatedTextWordProps {
  text: string;
}

const AnimatedTextWord: React.FC<AnimatedTextWordProps> = ({ text }) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const containerStyle = { display: "flex", fontSize: "2rem" };
  const wordStyle = { marginRight: "9px" };

  return (
    <motion.div
      ref={ref}
      style={containerStyle}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={wordStyle}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
