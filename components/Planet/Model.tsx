import { useAnimations ,useGLTF, useScroll } from '@react-three/drei/';
import { useEffect ,useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

useGLTF.preload('./planet1.glb');



export default function Model() {
    const group = useRef<Group>(null);
    const {animations, scene} = useGLTF('./planet1.glb');
    const { actions } = useAnimations(animations, scene);
    const scroll = useScroll();


useEffect(() => {
    console.log(actions)
    //@ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
    actions["Object_0"].play().paused = true}, [])

useFrame(
    () =>
      //@ts-ignore
    (actions["Object_0"].time =
        //@ts-ignore
        (actions["Object_0"].getClip().duration * scroll.offset) / 1),
        
)

    return(
        <group  position={[0, -0.7, -0.2]} ref={group}>
            <primitive object={scene}/>
        </group>
    )
}
