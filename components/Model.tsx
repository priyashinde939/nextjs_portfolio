import { useAnimations ,useGLTF, useScroll } from '@react-three/drei/';
import { useAnimation } from 'framer-motion';
import { useEffect ,useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

useGLTF.preload('./robot_playground.glb');



export default function Model() {
    const group = useRef<Group>(null);
    const {nodes, materials, animations, scene} = useGLTF('./robot_playground.glb');
    const { actions, clips } = useAnimations(animations, scene);
    const scroll = useScroll();


useEffect(() => {
    console.log(actions)
    //@ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
    actions["Experiment"].play().paused = true}, [])

useFrame(
    () =>
      //@ts-ignore
    (actions["Experiment"].time =
        //@ts-ignore
        (actions["Experiment"].getClip().duration * scroll.offset) / 1),
        
)

    return(
        <group  position={[0, -0.7, -0.2]} ref={group}>
            <primitive object={scene}/>
        </group>
    )
}