import React from 'react';
import * as THREE from 'three';

const Controls = () => {

    const toggleColor = e => {
        e.preventDefault();
        const mesh = window.activeMesh || window.state.scene.getObjectByName("Capot001_CAR_PAINT_0");
        if (!mesh) return;
        mesh.material.color = new THREE.Color(e.target.style.background)
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
        <div style={{position:'relative', width: '200px', zIndex:999, margin: 'auto'}} >
            <div style={{position: 'absolute', top:'10px', display: 'flex'}}>
                <a 
                    href='' 
                    style={{background:'black', width: '50px', height: '50px'}}
                    onClick={toggleColor}
                ></a>
                <a 
                    href='' 
                    style={{background:'red', width: '50px', height: '50px'}}
                    onClick={toggleColor} 
                ></a>
                <a 
                    href='' 
                    style={{background:'white', width: '50px', height: '50px'}}
                    onClick={toggleColor} 
                ></a>
                <a 
                    href='' 
                    style={{background: 'yellow', width: '50px', height: '50px'}}
                    onClick={toggleColor} 
                ></a>
            </div>
            <button 
                style={{position:'absolute', top: '70vh', width: '30px', height: '30px', cursor: 'pointer', left:0, borderRadius: '100%', border: '1px solid black', background: 'rgb(255,255,255, 0.7)'}}
                onClick={e => toggleSet(1)}
            >{'<'}</button>
            <button 
                style={{position:'absolute', top: '70vh', width: '30px', height: '30px', cursor: 'pointer', right:0, borderRadius: '100%', border: '1px solid black', background: 'rgb(255,255,255, 0.7)'}}
                onClick={e => toggleSet(2)}
            >{'>'}</button>

        </div>
    );
};

export default Controls;