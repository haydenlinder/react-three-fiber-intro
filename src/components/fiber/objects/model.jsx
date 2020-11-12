import { useLoader } from 'react-three-fiber';
import { useBox } from 'use-cannon';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = (props) => {
    const model = useLoader(GLTFLoader, props.path);
    const [ref, api] = useBox(() => ({ mass: 1, args: [2,1.5,3], type: 'Dynamic', ...props }))
    return (
        <primitive ref={ref} api={api} object={model.scene} scale={props.scale} />
    );
};

export default Model;