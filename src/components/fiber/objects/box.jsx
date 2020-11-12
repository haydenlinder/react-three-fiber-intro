import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { useCylinder } from 'use-cannon';

const Box = (props) => {
    const texture = useLoader(THREE.TextureLoader, props.texture)
    const [ref, api] = useCylinder(() => ({ args: [1,1,2,90], mass: 1, type:'Dynamic', ...props }))
    return (
        <mesh
            ref={ref}
            api={api}
            castShadow
            receiveShadow
        >
            <cylinderBufferGeometry args={[1,1,2,90]} />
            <meshPhysicalMaterial 
                map={texture} 
                clearcoat={1} 
            />
        </mesh>
    );
};

export default Box;