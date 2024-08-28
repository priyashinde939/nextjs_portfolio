import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

useGLTF.preload('./dragon.glb');

export default function Model() {
    const group = useRef<Group>(null);
    const { animations, scene } = useGLTF('./dragon.glb');
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        if (actions["Animation"]) {
            actions["Animation"].play();
            actions["Animation"].paused = false; // Play animation normally
        }
    }, [actions]);

    useFrame(() => {
        // You can add logic here to control animations differently if needed.
    });

    return (
        <group position={[0, -0.7, -0.2]} ref={group}>
            <primitive object={scene} />
        </group>
    );
}
