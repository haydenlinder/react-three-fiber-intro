import { useRef, useEffect, useState } from 'react';
import { extend, useThree } from 'react-three-fiber';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
extend({ DragControls });

const Dragable = (props) => {
    const [children, setChildren] = useState([]);
    const config = useThree();
    const { camera, gl } = config;
    const controls = useRef();
    const ref = useRef();

    useEffect(() => {
        setChildren(ref.current.children);
    }, []);
    
    useEffect(() => {
        const current = controls.current;
        if (current) {
            current.addEventListener('hoveron', e => setOrbitEnabled(false));
            current.addEventListener('hoveroff', e => setOrbitEnabled(true));
            current.addEventListener('dragend', e => {
                setOrbitEnabled(true)
                e.object.api.mass.set(1)
            });
            current.addEventListener('dragstart', e => setOrbitEnabled(false));
            current.addEventListener('drag', e => {
                e.object.api.position.copy(e.object.position)
                e.object.api.velocity.copy({x:0,y:0,z:0})
                e.object.api.mass.set(0)
            });
        }
    }, [children]);

    const setOrbitEnabled = (bool) => {
        config.scene.__objects[0].enabled = bool;
    };

    return (
        <group ref={ref}>
            <dragControls args={[children, camera, gl.domElement]} ref={controls} transformGroup={props.transformGroup}/>
            {props.children}
        </group>
    );
};

export default Dragable;