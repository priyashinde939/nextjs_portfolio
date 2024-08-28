'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model';
import { ScrollControls} from '@react-three/drei/';
import CanvasLoader from '../ui/CanvasLoader';




export default function Scene() {
  return (
    <section>
      <div className="relative h-screen bg-black-200 ">
            <Canvas style={{ height: '100vh', width: '100%' }}
            camera={{ position: [-0.5, 0.5, 3], fov: 60, far:10, near:1, aspect:2 }}
            gl={{antialias:true}} dpr={[1, 2]} className="relative mb-5">
            <directionalLight position={[-5, -5, 8]}  intensity={4}/>
            <ambientLight intensity={2} color='blue' />
              <Suspense fallback={<CanvasLoader/>}>

                      <Model />

              </Suspense>
          </Canvas>
      </div>
    </section>
  )
}
