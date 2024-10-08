import React, { useState, useEffect} from "react"
import MapModal from '../otherModules/MapModal';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css'
import '../styles/about.css'

function AboutPage(){
    const [displayedText, setDisplayedText] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);
    const [fadeOut, setFadeOut] = useState(false); 
    const [showMap, setShowMap] = useState(false); 
    const location = useLocation(); 
    const navigate = useNavigate();
    const fullText = `Hello! I am Anastasiia and I am currently a student specializing in software engineering, with a strong foundation in object-oriented programming (OOP). My primary focus is on advancing my skills in JavaScript, including technologies such as the React library and the Node.js runtime environment. I am dedicated to mastering these technologies, as they are essential for building modern, dynamic web applications. Alongside my programming expertise, I have practical experience using GitHub for version control and collaboration, and I am continuously expanding my knowledge in database management to ensure seamless integration of front-end and back-end systems.\n\nPress next to see my main tools and technologies...`; 
    
    const openMap = () => {
     setShowMap(true); 
    }
  
    const closeMap = () => {
     setShowMap(false); 
   }

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index++;
            setDisplayedText(fullText.substring(0, index));
            if (index >= fullText.length) {
                clearInterval(interval);
                setTypingComplete(true);
            }
        }, 30); 

        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                setDisplayedText(fullText);
                clearInterval(interval);
                setTypingComplete(true);
            }
        };
    
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            clearInterval(interval);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [fullText]);


    const handleNextClick = () => {
        setFadeOut(true); 
        setTimeout(() => {
            navigate('/tech');
        }, 1500);
    };


    return(
        <>
         <MapModal showMap={showMap} closeMap={closeMap} currentPath={location.pathname} />
         <div className={`aboutPage ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <div className='aboutPage-image'> 
            <button type="button" className='map' onClick={openMap}><FontAwesomeIcon icon={faMapLocationDot}/></button>
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