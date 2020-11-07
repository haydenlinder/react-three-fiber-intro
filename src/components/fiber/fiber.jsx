import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './objects/box';
import Floor from './objects/floor';
import Orbit from './controls/Orbit';
import Bulb from './objects/bulb';
import Background from './objects/background';
import Portal from './controls/portal';
import Model from './objects/model';
import Dragable from './controls/Dragable';

const Fiber = () => {
    return (
        <Canvas shadowMap camera={{ position: [3, 2, 3] }}>
            <Suspense fallback={null}>
                <Portal />
                <axesHelper />
                <Orbit/>
                <ambientLight intensity={0.2} />
                <Background />
                <Floor position={[-10, -0.5, 0]} />
                <Model 
                    path='/tesla_model_3/scene.gltf' 
                    groupName='car1' 
                    position={[0,0.6,0]} 
                    scale={0.01}
                />
                <Model 
                    path='/tesla_model_s/scene.gltf' 
                    groupName='car2' 
                    position={[-20,0.2,0]} 
                    scale={0.013}
                />
                <Bulb position={[-20, 3, 2]} />
                <Bulb position={[0, 3, 2]} />
                <Dragable groupName='group-1'>
                    <group position={[-10, 0, 0]}>
                        <Box position={[-1, 2, 0]} texture='/metal.jpg' />
                        <Box position={[1, 2, -2]}  texture='/metal.jpg'/>
                        <Box position={[-1, 2, -2]} texture='/wood.jpg' />
                        <Box position={[1, 2, 0]}  texture='/wood.jpg'/>
                    </group>
                </Dragable>
            </Suspense>
        </Canvas>
    );
};

export default Fiber;
