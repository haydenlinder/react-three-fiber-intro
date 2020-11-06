import { useEffect, useRef } from "react";
import { useFrame, useLoader, useThree } from 'react-three-fiber';
import * as THREE from 'three';

const Box = (props) => {
    const texture = useLoader(THREE.TextureLoader, props.texture)
    const mesh = useRef();
    const g = -10;
    const config = useThree();

    useFrame(() => {
        const current = mesh.current;
        const time = config.clock.elapsedTime;
        const dt = time - current.time;
        if (current.position.y > 1) {
            if (current.falling) current.position.y = Math.max(current.position.y + (g/2)*(dt**2), 1)
        } else {
            current.position.y = 1;
        }
    });

    const handlePointerDown = e => {
        const current = mesh.current;
        current.falling = false;
        if (window.activeMesh) 
            window.activeMesh.material.color = new THREE.Color('white')
        current.material.color = new THREE.Color('blue');
        window.activeMesh = current;
    }

    const handlePointerUp = e => {
        const current = mesh.current;
        current.falling = true;
        current.time = config.clock.elapsedTime;
    }

    return (
        <mesh
            {...props}
            ref={mesh}
            castShadow
            receiveShadow
            falling={true}
            time={0}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
        >
            <cylinderBufferGeometry args={[1, 1, 2, 90]} />
            <meshPhysicalMaterial 
                map={texture} 
                clearcoat={1} 
            />
        </mesh>
    );
};

export default Box;