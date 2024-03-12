import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './text.css';

const Text = () => {
    useEffect(() => {
        // Initialize Typed.js instance after component mounts
        var typed = new Typed('.auto-input', {
            strings: ['salma', 'sally'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });

        // Cleanup function to destroy Typed.js instance when component unmounts
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        
        <div class="center-container">
            <h1  className="text-xl-start fs-1">Happy birthday to <span className='auto-input'> </span> <br></br> and your dad too  </h1>
        </div>

    );
    
};

export default Text;
