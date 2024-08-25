import React, { useState, useEffect} from "react"
import MapModal from '../otherModules/MapModal';
import { useNavigate,  useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import '../styles/projects.css'
import '../styles/App.css'

function ProjectsPage(){
    const [showMap, setShowMap] = useState(false); 
    const location = useLocation();
    
    const openMap = () => {
    setShowMap(true); 
    }
  
    const closeMap = () => {
    setShowMap(false); 
  }
    return(
        <>
         <MapModal showMap={showMap} closeMap={closeMap} />
         <div className='projectsPage'>
           <div className='projectsPage-image'>
           <button type="button" className='map' onClick={openMap}><FontAwesomeIcon icon={faMapLocationDot}/></button>
           <div className="projectRent">
            <div className="projectText"> This is a web application for managing the rental process of tourist equipment, 
                including inventory management,
                customer information handling, and payment processing.</div>
            <div className="projectTools"> Technologies Used: JavaScript, css, MySQL database, React, Node.js</div>
           </div>
           </div>
        </div>
        </>
    )
}

export default ProjectsPage;