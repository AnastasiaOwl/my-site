import React, { useState, useEffect} from "react"
import MapModal from '../otherModules/MapModal';
import {useNavigate, NavLink,  useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import '../styles/tech.css'

function TechPage(){
    const [showMap, setShowMap] = useState(false); 
    const navigate = useNavigate();
    const location = useLocation();
    
  const openMap = () => {
    setShowMap(true); 
  }
  
  const closeMap = () => {
    setShowMap(false); 
  }

  const handleNextClick = () => {
    navigate('/projects'); 
};

    return(
    <>
    <MapModal showMap={showMap} closeMap={closeMap} />
    <div className='techPage'>
        <div className='techPage-image'>
            <button type="button" className='map' onClick={openMap}><FontAwesomeIcon icon={faMapLocationDot}/></button>
            <div className='container-tech'>
                <div className='icons-tech'>
                    <div className='icon js'></div>
                    <div className='icon react'></div>
                    <div className='icon git'></div>
                    <div className='icon db'></div>
                    <div className='icon node'></div>
                    <div className='icon css'></div>
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