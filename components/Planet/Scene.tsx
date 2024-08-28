'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model';
import { ScrollControls} from '@react-three/drei/';
import { OrbitControls} from '@react-three/drei';
import CanvasLoader from '../ui/CanvasLoader';




export default function Scene() {
  return (
    <section>
      <div className="relative ">
            <Canvas style={{ height: '100vh', width: '100%' }}
            
            camera={{ position: [5, 1, 3], fov: 50, near: 0.1, far: 1000 }}
            gl={{antialias:true}} dpr={[4, 6]} className="relative mb-5">
            <OrbitControls enableZoom={false} enablePan={false}/>
            <directionalLight position={[10, 5, 8]}  intensity={4}/>
            <ambientLight intensity={5} color='white' />
              <Suspense fallback={<CanvasLoader/>}>
                      <Model />
              </Suspense>
          </Canvas>
      </div>
    </section>
  )
}
