'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model';
import { useProgress, Html } from '@react-three/drei';
import { OrbitControls} from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas
      style={{ height: '100vh', width: '100%' }}
      camera={{ position: [0, 0, -10], fov: 25, far: 70}}
      gl={{ antialias: true }}
      dpr={[1.5, 2]}
    >
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} />
      <directionalLight position={[-5, -5, 10]} intensity={2} />
      <ambientLight intensity={0.9} color='white' />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

