import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './objects/box';
import Floor from './objects/floor';
import Dragable from './controls/Dragable';
import Orbit from './controls/Orbit';
import Bulb from './objects/bulb';
import Background from './objects/background';
import Portal from './objects/portal';

const Fiber = () => {
    return (
        <Canvas shadowMap camera={{ position: [3, 5, 3] }}>
            <Suspense fallback={null}>
                <Portal />
                <axesHelper />
                <Orbit/>
                <ambientLight intensity={0.2} />
                <Background />
                <Dragable groupName='group-1'>
                    <Bulb position={[0, 3, 2]} />
                    <Box position={[-1, 2, 0]} texture='/metal.jpg' />
                    <Box position={[1, 2, 0]}  texture='/metal.jpg'/>
                </Dragable>
                <Floor position={[0, -0.5, 0]} />
                <group position={[-20, 0, 0]}>
                    <Dragable groupName='group-2'>
                        <Bulb position={[0, 3, 2]} />
                        <Box position={[-1, 2, 0]} texture='/wood.jpg' />
                        <Box position={[1, 2, 0]}  texture='/wood.jpg'/>
                    </Dragable>
                    <Floor position={[0, -0.5, 0]} />
                </group>
            </Suspense>
        </Canvas>
    );
};

export default Fiber;
