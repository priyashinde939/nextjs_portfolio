import React from 'react'
import splitStringUsingRegex from '@/components/ui/SplitStringUsingRegex';
import  {motion, Variants} from 'framer-motion'

const heading = "Hey there...!  Im Priya A Passionate Web Developer and Designer";
const text = 
  "combining the aesthetic aspects of design with the technical precision of development to deliver exceptional web experiences. I enjoy working with tools like Framer Motion, TypeScript, and Tailwind CSS to create interactive and dynamic websites";

  const charVariants = {
    hidden: {opacity: 0},
    reveal: {opacity: 1}
  };

function Text () {
  const headingChars = splitStringUsingRegex(heading)
  const textChars = splitStringUsingRegex(text)

  return (
    <div className="relative p-9">
      <motion.h1 initial="hidden"
          whileInView="reveal"
          transition={{staggerChildren: 0.06}}
          style={{ fontFamily:'blackExpanded'}}
          className="relative font-black w-40% text-6xl text-green-400 "
      > {headingChars.map((char) => (
        <motion.span  key={char} 
                      transition={{duration:1 
                      }}
                      variants={charVariants}
                      
                      >
                      
          {char}
        </motion.span>))}
      </motion.h1>
      <motion.p initial="hidden"
          whileInView="reveal"
          transition={{staggerChildren: 0.02}}
          style={{fontFamily:'regular'}}
          className="relative w-30%"
      >  {textChars.map(char => (
        <motion.span  key={char} 
                      transition={{dusration: 0.35}}
                      variants={charVariants}
                      >
          {char}
        </motion.span>
      ))}
      </motion.p>
    </div>
  );
}

export default Text;