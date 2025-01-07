import React, { useState} from "react"
import { useLocation } from 'react-router-dom';
import MapModal from '../otherModules/MapModal';
import ImageModal from "../otherModules/ImageModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import useSound from 'use-sound';
import clickSound from '../sounds/click.mp3'; 
import rentImage from '../background-images/rent-photo/rent-main.png';
import todoImage from '../background-images/todo-photo/todo-main.png';
import gameImage from '../background-images/game-photo/game-main.png';
import kolingvaImage from '../background-images/kolingva-photo/kolingva-main.png';
import kolingvaImage1 from '../background-images/kolingva-photo/kolingva1.png';
import kolingvaImage2 from '../background-images/kolingva-photo/kolingva2.png';
import kolingvaImage3 from '../background-images/kolingva-photo/kolingva3.png';
import kolingvaImage4 from '../background-images/kolingva-photo/kolingva4.png';
import kolingvaImage5 from '../background-images/kolingva-photo/kolingva5.png';
import kolingvaImage6 from '../background-images/kolingva-photo/kolingva6.png';
import kolingvaImage7 from '../background-images/kolingva-photo/kolingva7.png';
import rentImage1 from '../background-images/rent-photo/rent1.png';
import rentImage2 from '../background-images/rent-photo/rent2.png';
import rentImage3 from '../background-images/rent-photo/rent3.png';
import rentImage4 from '../background-images/rent-photo/rent4.png';
import todoImage1 from '../background-images/todo-photo/todo1.png';
import todoImage2 from '../background-images/todo-photo/todo2.png';
import todoImage3 from '../background-images/todo-photo/todo3.png';
import todoImage4 from '../background-images/todo-photo/todo4.png';
import gameImage1 from '../background-images/game-photo/game1.png';
import gameImage2 from '../background-images/game-photo/game2.png';
import gameImage3 from '../background-images/game-photo/game3.png';

import '../styles/projects.css'
import '../styles/App.css'

function ProjectsPage(){
    const [showMap, setShowMap] = useState(false); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation(); 
    const [play] = useSound(clickSound, { volume: 0.8 });
    const [fadeOut] = useState(false); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);

    const rentImages = [rentImage, rentImage1, rentImage2, rentImage3, rentImage4];
    const todoImages = [todoImage, todoImage1, todoImage2, todoImage3, todoImage4];
    const gameImages = [gameImage, gameImage1, gameImage2, gameImage3];
    const kolingvaImages = [kolingvaImage, kolingvaImage1,kolingvaImage2,kolingvaImage3,kolingvaImage4,
        kolingvaImage5,kolingvaImage6,kolingvaImage7]
    
    const openMap = () => {
    setShowMap(true); 
    }
  
    const closeMap = () => {
    setShowMap(false); 
  }

  const openModal = (galleryImages, index) => {
    setImages(galleryImages);
    setCurrentIndex(index);
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
         <MapModal showMap={showMap} closeMap={closeMap} currentPath={location.pathname} />
         <ImageModal 
            showImage={isModalOpen} 
            closeImage={closeModal} 
            images={images} 
            currentIndex={currentIndex}
            goToNextImage={goToNextImage}
            goToPrevImage={goToPrevImage}
         />
        <div className={`projectsPage ${fadeOut ? 'fade-out' : 'fade-in'}`}>
           <div className='projectsPage-image'>
           <button type="button" className='map' onClick={openMap}><FontAwesomeIcon icon={faMapLocationDot}/></button>
           <div className="projects">
                <div className="projectRent">
                   <div className="projectName"> Rental App </div>
                    <div 
                        className="projectImage rent" 
                        onMouseEnter={play}
                        style={{ backgroundImage: `url(${rentImage})` }} 
                        onClick={() => openModal(rentImages, 0)}
                    ></div>
                    <div className="projectText"> This is a web application for managing the rental process of tourist equipment, 
                        including inventory management,
                        customer information handling, and payment processing.</div>
                    <div className="projectTools"> Technologies Used: JavaScript, css, MySQL database, React.js, Node.js</div>
                </div>
                <div className="projectKoLingva">
                        <div className="projectName">
                            <a href="https://kolingva.com/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            KoLingva</a>
                        </div>
                            <div 
                                className="projectImage kolingva" 
                                onMouseEnter={play}
                                style={{ backgroundImage: `url(${kolingvaImage})` }} 
                                onClick={() => openModal(kolingvaImages, 0)}
                            ></div>
                            <div className="projectText">  A cross-platform application designed to help users study the Korean
                                 language through interactive dictionaries and practice exercises on both web and mobile devices.</div>
                            <div className="kolingvaTools"> Technologies Used:
                                   <p>Node.js, MySQL, JavaScript, Express.js, Git (Backend & Database)</p>
                                   <p>React.js, SCSS (Web Version)</p>
                                   <p>React Native, TypeScript, Expo (Mobile Version)</p>
                            </div>
                </div>
                <div className="projectGame">                
                    <div className="projectName">
                        <a href="https://halloween-party-dun.vercel.app/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Halloween party </a>
                    </div>
                    <div 
                        className="projectImage game"
                        onMouseEnter={play}
                        style={{ backgroundImage: `url(${gameImage})`}}
                        onClick={() => openModal(gameImages, 0)}
                        >
                    </div>
                    <div className="gameText">This is fun and interactive Halloween-themed game
                    where you must match icons on the grid and earn points. When time runs out, the user can view their score and restart the game.</div>
                    <div className="gameTools">Technologies Used: JavaScript, css, React.js</div>
                </div>
                <div className="projectToDo">
                    <div className="projectName"> My ToDoList </div>
                    <div 
                    className="projectImage todo"
                    onMouseEnter={play}
                    style={{ backgroundImage: `url(${todoImage})`}}
                    onClick={() => openModal(todoImages, 0)}
                    ></div>
                    <div className="todoText">This project is a user-friendly Todo List application,
                        offering features such as creation, management, and deletion of todo items.</div>
                    <div className="todoTools">Technologies Used: JavaScript, css, React.js</div>
                </div>
            </div>
           </div>
        </div>
        </>
    )
}

export default ProjectsPage;