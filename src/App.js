import { Canvas, extend } from 'react-three-fiber';
import Box from './box';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import Dragable from './Dragable';


const App = () => {
  const orbitControls = useRef();
  const dragControls = useRef();
  const [orbitEnabled, setOrbitEnabled] = useState(true);

  // useEffect(() => {
  //   const current = orbitControls.current
  //   if (current) {
  //     console.log(current)
  //     current.enabled = orbitEnabled;
  //   }
  // }, [orbitEnabled]);

  const addDragableObject = object => {
    console.log(dragControls.current)
  }

  return (
    <Canvas >
      <pointLight position={[10,10,10]} />
      <ambientLight />
      <Dragable ref={dragControls}/>
      <OrbitControls enabled={orbitEnabled}/>
      <Box position={[1,1,1]} setOrbitEnabled={setOrbitEnabled} addDragableObject={addDragableObject}/>
      <Box setOrbitEnabled={setOrbitEnabled} addDragableObject={addDragableObject}/>
    </Canvas>
  );
};

export default App;
