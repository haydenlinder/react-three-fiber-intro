import { useEffect } from 'react';
import { useLoader } from 'react-three-fiber';
import { useThree } from 'react-three-fiber';
import { CubeTextureLoader } from 'three'

const Background = () => {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
   
    loader.loadAsync([
        '/sky.jpg',
        '/sky.jpg',
        '/sky.jpg',
        '/sky.jpg',
        '/sky.jpg',
        '/sky.jpg'
    ]).then(texture => {
        scene.background=texture
        texture.dispose();
    });

    return null;
};

export default Background;