import React, { useRef, useEffect }from 'react';

const Bulb = (props) => {
    return (
        <mesh {...props}>
            <meshPhongMaterial emissive='yellow' transparent opacity={1} />
            <sphereBufferGeometry args={[0.25,32,32]}/>
            <pointLight castShadow />
        </mesh>
    );
};

export default Bulb;