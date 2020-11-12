import { useFrame } from 'react-three-fiber';
import { Vector3 } from 'three'

const Portal = () => {
    const set1x = 0;
    const set2x = -20;
    const offset = 3;
    const dt = 0.5
    useFrame((state) => {
        window.state = state
        const { camera, scene } = state;
        const controls = scene.__objects[0]
        const { x,y,z } = controls.target
        const cx  = camera.position.x
        if (window.set === 1 && cx > set2x+offset) {
            camera.position.x = Math.max(cx - dt, set2x+offset)
            controls.target = new Vector3(Math.max(x - 2 * dt, set2x), y, z)
        } else if (window.set === 2 && cx < set1x+offset) {
            camera.position.x = Math.min(cx + dt, set1x + offset)
            controls.target = new Vector3(Math.min(x + 2 * dt, set1x), y, z)
        } else {
            window.set = null;
        }
        controls.update();
    })

    return null
};

export default Portal;