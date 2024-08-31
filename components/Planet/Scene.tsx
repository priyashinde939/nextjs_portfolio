'use client';
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model';
import {useProgress, Html, ScrollControls} from '@react-three/drei/';


function Loader() {
const { progress, active } = useProgress()
return <Html center> {progress.toFixed(1)} % loaded</Html>
}


export default function Scene() {
  return (
    <Canvas
      style={{ height: '100vh', width: '100%' }}
      camera={{ position: [5, -15, 10], fov: 55, far: 50, near: 0.9 }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
    >
      <directionalLight position={[-5, -5, 8]} intensity={1} />
      <ambientLight intensity={0.5} color='white' />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.9} pages={4}  style={{position:'absolute'}}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
