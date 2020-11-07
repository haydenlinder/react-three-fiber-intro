import { useFrame } from 'react-three-fiber';
import { Vector3 } from 'three'
import * as THREE from 'three'

const Portal = () => {
    const cx1 = 0;
    const cx2 = -20;
    const offset = 3;
    useFrame((state) => {
        const { camera, scene, clock } = state;
        window.state = state
        window.THREE = THREE
        const dt = 50000*clock.getDelta();
        const orbit = scene.__objects[0]
        const { x,y,z } = orbit.target
        const cx  = camera.position.x
        if (window.set === 1 && cx > cx2+offset) {
            const newcx = Math.max(cx - dt, cx2+offset)
            const newox = Math.max(x - 2*dt, cx2)
            camera.position.x = newcx
            orbit.target = new Vector3(newox, y, z)
            orbit.update();
        } else if (window.set === 2 && cx < cx1+offset) {
            const newcx = Math.min(cx + dt, cx1+offset)
            const newox = Math.min(x + 2*dt, cx1)
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