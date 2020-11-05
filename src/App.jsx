import { directive } from '@babel/types';
import { useState } from 'react';
import Controls from './components/controls';
import Fiber from './components/fiber/fiber';
import * as THREE from 'three';
import { useSpring } from 'react-spring';

const App = () => {
  const toggleSet = num => {
    window.set = num;
  }

  return (
    <div className='flex h-screen w-screen'>
      <Controls />
      <div className='w-full relative'>
        <button onClick={e => toggleSet(1)} className='p-10 z-2 pointer'>{'<'}</button>
        <button onClick={e => toggleSet(2)} className='p-10 z-2 pointer'>{'>'}</button>
        <Fiber />
      </div>
    </div>
  );
};

export default App;