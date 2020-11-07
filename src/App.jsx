import Controls from './components/controls';
import Fiber from './components/fiber/fiber';

const App = () => {
  return (
    <div className='h-screen w-screen relative'>
      <Controls />
      <Fiber />
    </div>
  );
};

export default App;