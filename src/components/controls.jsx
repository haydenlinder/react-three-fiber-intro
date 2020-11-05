import React from 'react';

const Controls = ({setTextureSource}) => {

    const handleClick = e => {
        e.preventDefault();
        const src = e.target.src;
        if (!src) return;
        setTextureSource(e.target.src)
    };

    return (
        <div className='h-full w-50' onClick={handleClick} >
            <a href='' className='overflow-hidden'>
                <img 
                    width='50' 
                    src='/wood.jpg' 
                    alt="wood"
                />
            </a>
            <a href='' className='overflow-hidden' onClick={handleClick} >
                <img 
                    width='50' 
                    src='/tile.jpg' 
                    alt="wood"
                />
            </a>
        </div>
    );
};

export default Controls;