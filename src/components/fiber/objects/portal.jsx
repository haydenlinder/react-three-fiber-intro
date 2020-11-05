import { useFrame } from 'react-three-fiber';
import { Vector3 } from 'three'

const Portal = () => {
    useFrame(({ camera, scene, clock }) => {
        const dt = 50000*clock.getDelta();
        const orbit = scene.__objects[0]
        const { y,z } = orbit.target
        const { x } = camera.position
        if (window.set === 1 && x > -20) {
            const newx = Math.max(x - dt, -20)
            camera.position.x = newx
            orbit.target = new Vector3(-20, y, z)
            orbit.update();
        } else if (window.set === 2 && x < 0) {
            const newx = Math.min(x + dt, 0)
            camera.position.x = newx
            orbit.target = new Vector3(0, y, z)
            orbit.update();
        }
    })
    return null
};

export default Portal;