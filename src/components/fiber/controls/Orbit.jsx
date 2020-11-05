import React from 'react';
import { useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

const Orbit = (props) => {
    const config = useThree();
    const {camera, gl} = config;
    return (
        <orbitControls args={[camera, gl.domElement]} name='orbit-controls'/>
    );
};

export default Orbit;