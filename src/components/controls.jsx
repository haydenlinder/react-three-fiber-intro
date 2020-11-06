import React from 'react';
import * as THREE from 'three';

const Controls = () => {

    const toggleTexture = e => {
        e.preventDefault();
        const src = e.target.src;
        const mesh = window.activeMesh;
        if (!src || !mesh) return;
        new THREE.TextureLoader().loadAsync(e.target.src)
        .then(texture => mesh.material.map = texture)
    };

    const toggleSet = num => {
        window.set = num;
    }

    return (
        <div className='h-full w-50' onClick={toggleTexture} >
            <a href='' className='overflow-hidden'>
                <img 
                    width='50' 
                    src='/wood.jpg' 
                    alt="wood"
                />
            </a>
            <a href='' className='overflow-hidden' onClick={toggleTexture} >
                <img 
                    width='50' 
                    src='/tile.jpg' 
                    alt="wood"
                />
            </a>
            <a href='' className='overflow-hidden' onClick={toggleTexture} >
                <img 
                    width='50' 
                    src='/metal.jpg' 
                    alt="wood"
                />
            </a>
            <button onClick={e => toggleSet(1)} className='p-10 z-2 pointer'>{'<'}</button>
            <button onClick={e => toggleSet(2)} className='p-10 z-2 pointer'>{'>'}</button>
        </div>
    );
};

export default Controls;