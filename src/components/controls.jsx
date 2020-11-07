import React from 'react';
import * as THREE from 'three';

const Controls = () => {

    const toggleTexture = e => {
        e.preventDefault();
        const src = e.target.src;
        const mesh = window.activeMesh;
        if (!src || !mesh) return;
        new THREE.TextureLoader().loadAsync(e.target.src)
        .then(texture => {
            texture.encoding = THREE.sRGBEncoding;
            texture.flipY = false;
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            mesh.material.map = texture
            mesh.material.color = new THREE.Color('white')
            mesh.material.needsUpdate = true
        })
    };

    const toggleSet = num => {
        const carNames = { 
            2: "Capot001_CAR_PAINT_0",
            1: "object005_bod_0"
        };
        window.activeMesh = window.state.scene.getObjectByName(carNames[num]);
        window.set = num;
    }

    return (
        <div className='relative z-2 w-full bg-black' onClick={toggleTexture} >
            <div className='absolute'>
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
            </div>
            <div className='absolute top-70 m-auto right-0 left-0 w-200 flex justify-between'>
                <button onClick={e => toggleSet(1)} className='p-10 pointer'>{'<'}</button>
                <button onClick={e => toggleSet(2)} className='p-10 pointer'>{'>'}</button>
            </div>
        </div>
    );
};

export default Controls;