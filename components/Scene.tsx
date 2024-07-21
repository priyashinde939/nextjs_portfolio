'use client';
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model';
import {useProgress, Html, ScrollControls} from '@react-three/drei/';

import { useScroll, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ReactCurvedText from "react-curved-text";



function Loader() {
const { progress, active } = useProgress()
return <Html center> {progress.toFixed(1)} % loaded</Html>
}


export default function Scene() {
  return (
    <section>
      <div className="absolute top-8 right-15 h-32 w-[70%] z-0  bg-gray-700 ">
          

    </div>
      <motion.div
          style={{fontFamily:'regular'}}
          className="absolute right-2"
          animate={{
            rotate: 360,
            transition: {
              duration:2.5,
              repeat: Infinity,
              repeatDelay: 0,
              repeatType: "loop",
            },
          }}
        >
          <ReactCurvedText
          text="HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HeLlO HELLO HELLO HELLO HELLO "
          width={400}
          height={370}
          cx={190}
          cy={150}
          rx={140}
          ry={140}
          startOffset={0}
          reversed={true}
            textPathProps={{ fill: "#ffffff" }}
            textProps={{
              style: { color: "white", fontSize: 15, position: "absolute" },
            }}
          />
        </motion.div>
    
      <div className="relative z -1 left-36 top-4">
        <Canvas style={{ height: '100vh', width: 'full' }}
          camera={{ position: [-0.5, 0.5, 3], fov: 60, far:10, near:1, aspect:2 }}

          gl={{antialias:true}} dpr={[3, 4.5]} className="relative mb-5">

              <directionalLight position={[-5, -5, 8]}  intensity={4}/>
              <ambientLight intensity={2} color='blue' />
              <Suspense fallback={<Loader/>}>
                  <ScrollControls damping={0.9} pages={4}>
                      <Model />
                  </ScrollControls>
              </Suspense>

          </Canvas>
      </div>

   

    </section>
  )
}
