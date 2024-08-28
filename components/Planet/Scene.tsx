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
      <div className="absolute w-full left-28 "> 
            <Canvas style={{ height: '200vh', width: '100%' }}
            
            camera={{ position: [2, 1, 8], fov: 70, near: 0.3, far: 1000 }}
            gl={{antialias:true}} dpr={[1.5, 2]} className="relative mb-5">
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} />
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
