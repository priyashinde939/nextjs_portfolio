import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';

useGLTF.preload('./planet5.glb');

export default function Model() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('./planet5.glb');

  return (
    <group position={[0.5, 2, 1]} scale={[5, 5, 5]} ref={group}>
      <primitive object={scene} />
    </group>
  );
}
