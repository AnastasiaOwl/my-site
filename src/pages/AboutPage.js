import React, { useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import '../styles/about.css'

function AboutPage(){
    const [displayedText, setDisplayedText] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);
    const navigate = useNavigate(); 
    const fullText = `I am currently a student specializing in software engineering, with a strong foundation in object-oriented programming (OOP). My primary focus is on advancing my skills in JavaScript, including frameworks such as React and Node.js. I am dedicated to mastering these technologies, as they are essential for building modern, dynamic web applications. Alongside my programming expertise, I have practical experience using GitHub for version control and collaboration, and I am continuously expanding my knowledge in database management to ensure seamless integration of front-end and back-end systems.\n\nPress next to see my main tools and technologies...`;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index++;
            setDisplayedText(fullText.substring(0, index));
            if (index >= fullText.length) {
                clearInterval(interval);
                setTypingComplete(true);
            }
        }, 40); 

        return () => clearInterval(interval);
    }, [fullText]);

    const handleNextClick = () => {
        navigate('/tech'); 
    };


    return(
        <>
        <div className='aboutPage'>
        <div className='aboutPage-image'>
            <div className='container'>
                 <div className='aboutPage-text'>{displayedText}</div>
                 {typingComplete && (
                        <button type="button" className='button-next' onClick={handleNextClick}>
                            Next <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    )}
            </div>
        </div>
        </div>
        </>
    )
}

export default AboutPage;