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
import { Physics } from 'use-cannon';

const Fiber = () => {
    return (
        <Canvas shadowMap camera={{ position: [3, 2, 4] }}>
            <Portal />
            <axesHelper />
            <Orbit/>
            <Bulb position={[-20, 3, 2]} />
            <Bulb position={[0, 3, 2]} />
            <ambientLight intensity={0.2} />
            <Suspense fallback={null}>
                <Background />
            </Suspense>
            <Physics gravity={[0,-10,0]}>
                <Floor position={[-10, -1, 0]} />
                <Suspense>
                    <Dragable transformGroup>
                        <Model 
                            path='/tesla_model_3/scene.gltf' 
                            position={[0,1,0]} 
                            scale={new Array(3).fill(0.01)}
                            label='Model 3'
                        />
                    </Dragable>
                </Suspense>
                <Suspense fallback={null} >
                    <Dragable transformGroup>
                        <Model 
                            path='/tesla_model_s/scene.gltf' 
                            position={[-20,1,0]} 
                            scale={new Array(3).fill(0.013)}
                            label='Model S'
                        />
                    </Dragable>
                </Suspense>
                {/* <Dragable groupName='group-1'>
                    <Suspense fallback={null} >
                        <group position={[-10,0,0]}>
                            <Suspense fallback={null}>
                                <Box position={[-1, 2, 0]} texture='/metal.jpg' />
                            </Suspense>
                            <Suspense fallback={null}>
                                <Box position={[1, 2, -2]}  texture='/metal.jpg'/>
                            </Suspense>
                            <Suspense fallback={null}>
                                <Box position={[-1, 2, -2]} texture='/wood.jpg' />
                            </Suspense>
                            <Suspense fallback={null}>
                                <Box position={[1, 2, 0]}  texture='/wood.jpg'/>
                            </Suspense>
                        </group>
                    </Suspense>
                </Dragable> */}
            </Physics>
        </Canvas>
    );
};

export default Fiber;
