'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from '../../public/globeWhite.svg'
import Picture2 from '../../public/globeWhite.svg'

import Image from 'next/image';
import { useRef } from 'react';

export default function Marquee() {

  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })


  return (
    <main className="overflow-hidden">
      <div className='h-[10vh]'/>
      <div ref={container}>
        <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress}/>
        <Slide src={Picture2} direction={'right'} left={"-25%"} progress={scrollYProgress}/>
      </div>
      <div className='h-[10vh]' />
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase src={props.src}/>
      <Phrase src={props.src}/>
    </motion.div>
  )
}

const Phrase = ({src}) => {

  return (
    <div style={{fontFamily:"black"}}
    className={'px-5 flex gap-1 items-center'}>
      <p className='text-[4vw]'>Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{objectFit: "contain"}} src={src} alt="image" fill/>
      </span>
      <p className='text-[4vw]'>Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{objectFit: "contain"}} src={src} alt="image" fill/>
      </span>
    </div>
  )
}