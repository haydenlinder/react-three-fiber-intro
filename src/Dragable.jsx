import { extend, useThree } from 'react-three-fiber';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
extend({ DragControls });

const Dragable = (props) => {
    const { camera, gl } = useThree();
    return <DragControls args={[[], camera, gl.domElement]} />;
};

export default Dragable;