import { useRef, useEffect, useState } from 'react';
import { extend, useThree } from 'react-three-fiber';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
extend({ DragControls });

const Dragable = ({groupName, children}) => {
    const [childRefs, setChildRefs] = useState([]);
    const config = useThree();
    const { camera, gl } = config;
    const controls = useRef();

    useEffect(() => {
        const newRefs = config.scene.getObjectByName(groupName).children;
        setChildRefs(newRefs);
    }, []);
    
    useEffect(() => {
        const current = controls.current;
        if (current) {
            current.addEventListener('hoveron', e => setOrbitEnabled(false));
            current.addEventListener('hoveroff', e => setOrbitEnabled(true));
            current.addEventListener('dragend', e => setOrbitEnabled(false));
            current.addEventListener('dragstart', e => setOrbitEnabled(false));
        }
    }, [childRefs]);

    const setOrbitEnabled = (bool) => {
        config.scene.__objects[0].enabled = bool;
    };

    return (
        <group name={groupName}>
            <dragControls args={[childRefs, camera, gl.domElement]} ref={controls}/>
            {children}
        </group>
    );
};

export default Dragable;