import { useRef, useEffect } from "react";
import { useFrame, useThree } from 'react-three-fiber';
import { TransformControls } from '@react-three/drei';
import Dragable from "./Dragable";

const Box = (props) => {
    const { setOrbitEnabled, addDragableObject } = props;
    const { camera, gl } = useThree();
    const mesh = useRef();

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    })

    useEffect(() => {
        addDragableObject(mesh.current)
    }, [])

    const handlePointerEnter = e => {
        console.log('enter')
        setOrbitEnabled(false);
    };

    const handlePointerLeave = e => {
        console.log('leave')
        setOrbitEnabled(true);
    };

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={[1, 1, 1]}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    );
};

export default Box;