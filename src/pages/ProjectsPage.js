import React, { useState, useEffect} from "react"
import MapModal from '../otherModules/MapModal';
import ImageModal from "../otherModules/ImageModal";
import { useNavigate,  useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import rentImage from '../background-images/rent-photo/rent-main.png';
import rentImage1 from '../background-images/rent-photo/rent1.png';
import rentImage2 from '../background-images/rent-photo/rent2.png';
import rentImage3 from '../background-images/rent-photo/rent3.png';
import rentImage4 from '../background-images/rent-photo/rent4.png';
import '../styles/projects.css'
import '../styles/App.css'

function ProjectsPage(){
    const [showMap, setShowMap] = useState(false); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const location = useLocation();

    const images = [rentImage, rentImage1, rentImage2, rentImage3, rentImage4];
    
    const openMap = () => {
    setShowMap(true); 
    }
  
    const closeMap = () => {
    setShowMap(false); 
  }

  const openModal = (index) => {
    setCurrentIndex(0); 
    setIsModalOpen(true);
};

const closeModal = () => {
    setIsModalOpen(false);
};

const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const goToPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
};

    return(
        <>
         <MapModal showMap={showMap} closeMap={closeMap} />
         <ImageModal 
            showImage={isModalOpen} 
            closeImage={closeModal} 
            images={images} 
            currentIndex={currentIndex}
            goToNextImage={goToNextImage}
            goToPrevImage={goToPrevImage}
         />
         <div className='projectsPage'>
           <div className='projectsPage-image'>
           <button type="button" className='map' onClick={openMap}><FontAwesomeIcon icon={faMapLocationDot}/></button>
           <div className="projectRent">
           <div 
                  className="projectImage rent" 
                  style={{ backgroundImage: `url(${rentImage})` }} 
                  onClick={openModal}
            ></div>
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