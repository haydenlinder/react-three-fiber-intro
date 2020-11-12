import React from 'react';
import { useBox } from 'use-cannon';

const Floor = (props) => {
    const [ref] = useBox(() => ({ args: [40, 1, 20], ...props }))
    return (
        <mesh receiveShadow castShadow ref={ref}>
            <meshPhysicalMaterial 
                // map={texture} 
                clearcoat={1} 
                reflectivity={1}
            />
            <boxBufferGeometry args={[40,1,20]} />
        </mesh>
    );
};

export default Floor;
