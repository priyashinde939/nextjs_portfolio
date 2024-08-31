import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

useGLTF.preload('./triangle.glb');

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF('./triangle.glb');
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    if (actions["PortalAction"]) {
      actions["PortalAction"].play().paused = true;
    }
  }, [actions]);

  useFrame(() => {
    if (actions["PortalAction"]) {
      const duration = actions["PortalAction"].getClip().duration;
      // Calculate the looped time value
      const loopedTime = (scroll.offset * duration) % duration;
      actions["PortalAction"].time = loopedTime;
    }
  });

  
  return (
    <group position={[0, -0.7, -0.2]} scale={5} ref={group}>
      <primitive object={scene} />
    </group>
  );
}
