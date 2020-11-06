import { useFrame } from 'react-three-fiber';
import { Vector3 } from 'three'

const Portal = () => {
    useFrame(({ camera, scene, clock }) => {
        const dt = 50000*clock.getDelta();
        const orbit = scene.__objects[0]
        const { x,y,z } = orbit.target
        const cx  = camera.position.x
        if (window.set === 1 && cx > -20) {
            const newcx = Math.max(cx - dt, -20)
            const newox = Math.max(x - 2*dt, -20)
            camera.position.x = newcx
            orbit.target = new Vector3(newox, y, z)
            orbit.update();
        } else if (window.set === 2 && cx < 0) {
            const newcx = Math.min(cx + dt, 0)
            const newox = Math.min(x + 2*dt, 0)
            camera.position.x = newcx
            orbit.target = new Vector3(newox, y, z)
            orbit.update();
        } else {
            window.set = null;
        }
    })
    return null
};

export default Portal;