'use client';
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model';
import {useProgress, Html, ScrollControls} from '@react-three/drei/';
import CanvasLoader from './ui/CanvasLoader';



function Loader() {
const { progress } = useProgress()
return <Html center> {progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <section>
      <div className="relative left-72 top-9 ">
            <Canvas style={{ height: '100vh', width: '100%' }}
            camera={{ position: [-0.5, 0.5, 3], fov: 60, far:10, near:1, aspect:2 }}
            gl={{antialias:true}} dpr={[2, 4]} className="relative mb-5">
            <directionalLight position={[-5, -5, 8]}  intensity={4}/>
            <ambientLight intensity={2} color='blue' />
              <Suspense fallback={<CanvasLoader/>}>
                  <ScrollControls damping={0.9} pages={4}>
                      <Model />
                  </ScrollControls>
              </Suspense>
          </Canvas>
      </div>
    </section>
  )
}
