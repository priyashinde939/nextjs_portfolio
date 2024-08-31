import { useGLTF, useScroll } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

useGLTF.preload('./triangle.glb');

export default function Model() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('./triangle.glb');
  const scroll = useScroll();

  useFrame(() => {
    if (group.current) {
      // Example: Adjust the y position based on scroll offset
      const scrollY = scroll.offset; // Get the scroll offset
      const positionY = scrollY * 10  * -20; // Example scaling factor, adjust as needed
      group.current.position.y = positionY;
    }
  });

  return (
    <group position={[0, -0.7, -0.2]} scale={5} ref={group}>
      <primitive object={scene} />
    </group>
  );
}
