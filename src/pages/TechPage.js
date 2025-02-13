import React, { useState, useEffect} from "react"
import MapModal from '../otherModules/MapModal';
import { useNavigate, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSound from 'use-sound';
import clickSound from '../sounds/click.mp3'; 
import {faArrowRight, faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import '../styles/tech.css'

function TechPage(){
    const [showMap, setShowMap] = useState(false); 
    const [fadeOut, setFadeOut] = useState(false); 
    const [currentPath, setCurrentPath] = useState("");
    const location = useLocation(); 
    const navigate = useNavigate();
    const [play] = useSound(clickSound, { volume: 0.8 });

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    
  const openMap = () => {
    setShowMap(true); 
  }
  
  const closeMap = () => {
    setShowMap(false); 
  }

  const handleNextClick = () => {
    setFadeOut(true); 
    setTimeout(() => {
        navigate('/projects');
    }, 1500);
};

    return(
    <>
    <MapModal showMap={showMap} closeMap={closeMap} currentPath={currentPath}/>
    <div className={`techPage ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <div className='techPage-image'>
            <button type="button" className='map' onClick={openMap}><FontAwesomeIcon icon={faMapLocationDot}/></button>
            <div className='container-tech'>
                <div className='icons-tech'>
                    <span className="tool">
                        <img alt = "" className='icon js' onMouseEnter={play}></img>
                        <p className="icon-text">JavaScript</p>
                    </span>
                    <span className="tool">
                        <div className='icon typescript' onMouseEnter={play}></div>
                        <p className="icon-text">TypeScript</p>
                    </span>
                    <span className="tool">
                        <div className='icon scss' onMouseEnter={play}></div>
                        <p className="icon-text">CSS & SCSS</p>
                    </span>
                    <span className="tool">
                        <div className='icon react' onMouseEnter={play}></div>
                        <p className="icon-text">React.js & React Native</p>
                    </span>
                    <span className="tool">
                        <div className='icon node' onMouseEnter={play}></div>
                        <p className="icon-text">Node.js</p>
                    </span>
                    <span className="tool">
                        <div className='icon git' onMouseEnter={play}></div>
                        <p className="icon-text">GitHub</p>
                    </span>
                    <span className="tool">
                        <div className='icon db' onMouseEnter={play}></div>
                        <p className="icon-text">MySQL</p>
                    </span>
                </div>
                <button type="button" className='button-next-tech'  onClick={handleNextClick}>
                    Next <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
        </div>
    </>
    )
}

export default TechPage;