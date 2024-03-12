import React from 'react';
import confetti from 'canvas-confetti';

function ConfettiButton() {
    const party = () => {
        confetti({
            particleCount: 300,
            spread: 140
            // any other options from the global
            // confetti function
        });

    };
    const play=()=>{
        var audio=document.getElementById('audio')
        audio.currentTime = 0;
        audio.play();
    }

    return (
        <div className='btnt'>
            <button className="pushable" onClick={()=>{
                party();
                play();
            }}>
                <span className="front" onclick="play()">Push me</span>
                <audio id="audio" src="./Confetti Party Popper _ Free Sound Effect (1).mp3"></audio>
            </button>
            <style>
                {`
                    .front {
                        transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
                    }

                    .pushable:hover .front {
                        transform: translateY(-6px);
                        transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
                    }

                    .pushable:active .front {
                        transform: translateY(-2px);
                        transition: transform 34ms;
                    }
                    .pushable {
                        background: hsl(340deg 100% 32%);
                        border: none;
                        border-radius: 12px;
                        padding: 0;
                        cursor: pointer;
                        
                      }
                      .front {
                        display: block;
                        padding: 12px 42px;
                        border-radius: 12px;
                        font-size: 1.25rem;
                        background: hsl(345deg 100% 47%);
                        color: white;
                        transform: translateY(-4px);
                      }
                      
                      .pushable:active .front {
                        transform: translateY(-2px);
                      }
                      
                      .pushable:focus:not(:focus-visible) {
                        outline: none;
                      }

                `}
            </style>
        </div>
    );
}

export default ConfettiButton;
