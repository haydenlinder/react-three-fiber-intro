import { useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect } from 'react';
import Dragable from '../controls/Dragable';

const Model = (props) => {
    const { scene } = useThree();

    useEffect(() => {
        const loader = new GLTFLoader().loadAsync(props.path)
        .then(gltf => {
            const car = gltf.scene
            console.log(car)
            car.scale.x = props.scale;
            car.scale.y = props.scale;
            car.scale.z = props.scale;
            scene.getObjectByName(props.groupName).add(car)
        })
        .catch(e => {
            console.log(e)
        })
    }, [])

    return (
        <Dragable groupName={props.groupName} position={props.position} transformGroup/>
    );
};

export default Model;