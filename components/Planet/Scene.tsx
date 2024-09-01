'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model';
import { useProgress, Html, OrbitControls} from '@react-three/drei';
// import { Environment} from '@react-three/drei';
// import { EffectComposer, Bloom } from '@react-three/postprocessing';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export default function Scene() {
  return (
    //  <Canvas
    //   style={{ height: '100vh', width: '100%' }}
    //   camera={{ position: [0, 0, -10], fov: 21, far: 70}}
    //   gl={{ antialias: true }}
    //   dpr={[1.5, 2]}
    // >
    <Canvas
      style={{ height: '100vh', width: '100%' }}
      camera={{ position: [-10, -5, 10], fov: 15, far: 70}}
      gl={{ antialias: true }}
      dpr={[1.5, 2]}
    >
      <OrbitControls  enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={2}  />
      <directionalLight position={[-5, -5, 10]} color='red' intensity={7} />
      <ambientLight intensity={0.9} color='blue' />
      
      <Suspense fallback={<Loader />}>
        {/* <Environment preset="sunset" background={false} /> */}
        <Model />
                {/* Bloom Effect for Glowing */}
                {/* <EffectComposer>
                  <Bloom
                    luminanceThreshold={2}
                    luminanceSmoothing={2}
                    height={300}
                    intensity={2.5} // Increase intensity for stronger glow
                  />
                </EffectComposer> */}
      </Suspense>
    </Canvas>
  );
}

