import { useRef, useEffect, useState } from 'react';
import { extend, useThree } from 'react-three-fiber';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
extend({ DragControls });

const Dragable = (props) => {
    const [childRefs, setChildRefs] = useState([]);
    const config = useThree();
    const { camera, gl } = config;
    const controls = useRef();

    useEffect(() => {
        const newRefs = config.scene.getObjectByName(props.groupName).children;
        setChildRefs(newRefs);
    }, []);
    
    useEffect(() => {
        const current = controls.current;
        if (current) {
            current.addEventListener('hoveron', e => setOrbitEnabled(false));
            current.addEventListener('hoveroff', e => setOrbitEnabled(true));
            current.addEventListener('dragend', e => setOrbitEnabled(false));
            current.addEventListener('dragstart', e => setOrbitEnabled(false));
            current.addEventListener('dragstart', e => {
                if (e.object.type === 'Mesh') {
                    window.activeMesh = e.object;
                    console.log('active: ', e.object)
                }
                console.log(e)
            });
        }
    }, [childRefs]);

    const setOrbitEnabled = (bool) => {
        config.scene.__objects[0].enabled = bool;
    };

    return (
        <group name={props.groupName} position={props.position}>
            <dragControls args={[childRefs, camera, gl.domElement]} ref={controls} transformGroup={props.transformGroup}/>
            {props.children}
        </group>
    );
};

export default Dragable;