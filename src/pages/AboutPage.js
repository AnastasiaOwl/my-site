import React, { useState, useEffect, useRef} from "react"
import '../styles/about.css'

function AboutPage(){
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'I am currently a student specializing in software engineering, with a strong foundation in object-oriented programming (OOP). My primary focus is on advancing my skills in JavaScript, including frameworks such as React and Node.js. I am dedicated to mastering these technologies, as they are essential for building modern, dynamic web applications. Alongside my programming expertise, I have practical experience using GitHub for version control and collaboration, and I am continuously expanding my knowledge in database management to ensure seamless integration of front-end and back-end systems.\n\nPress next to see my main tools and technologies...';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText(prev => prev + fullText[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50); // Adjust typing speed here (lower for faster typing)

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return(
        <>
        <div className='aboutPage'>
        <div className='aboutPage-image'>
            {/* <div className='human-icon'></div> */}
            <div className='container'>
            <div className='aboutPage-text'>{displayedText}</div>
            </div>
        </div>
        </div>
        </>
    )
}

export default AboutPage;