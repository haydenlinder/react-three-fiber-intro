import React from 'react';
import { useThree } from 'react-three-fiber';

const Controls = () => {
    const config = useThree();
    const {camera, gl} = config;
    return (
        <orbitControls args={[camera, gl.domElement]} />
    )
}

export default Controls;