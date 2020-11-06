import Controls from './components/controls';
import Fiber from './components/fiber/fiber';

const App = () => {
  return (
    <div className='flex h-screen w-screen'>
      <Controls />
      <Fiber />
    </div>
  );
};

export default App;