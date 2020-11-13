import { useLoader } from 'react-three-fiber';
import { useBox } from 'use-cannon';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Html } from '@react-three/drei';

const Model = (props) => {
    const model = useLoader(GLTFLoader, props.path);
    const [ref, api] = useBox(() => ({ mass: 1, args: [2,1.5,3], type: 'Dynamic', ...props }))
    return (
        <primitive ref={ref} api={api} object={model.scene} scale={props.scale} >
            <Html position={[0,200,0]} >
                <div style={{whiteSpace:'nowrap', display: 'block', width: 'unset', background: 'white'}}>
                    {props.label}
                </div>
            </Html>
        </primitive>
    );
};

export default Model;