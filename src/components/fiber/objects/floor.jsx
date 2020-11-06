import React from 'react';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';

const Floor = (props) => {
    const texture = useLoader(THREE.TextureLoader, './tile.jpg')
    return (
        <mesh receiveShadow castShadow {...props}>
            <meshPhysicalMaterial 
                // map={texture} 
                clearcoat={1} 
                reflectivity={1}
            />
            <boxBufferGeometry args={[20,1,20]} />
        </mesh>
    );
};

export default Floor;
