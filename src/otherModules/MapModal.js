import React from "react";
import Modal from './Modal';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import useSound from 'use-sound';
import menuSound from '../sounds/menu.mp3';
import '../styles/App.css';

function MapModal({ showMap, closeMap }) {
    const location = useLocation();
    const [play] = useSound(menuSound, { volume: 1.8 });

    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/anastasia-filina/', '_blank');
    }

    const openTelegram = () => {
        window.open('https://t.me/fillina_anastasia', '_blank');
    }

    const openGmail = () => {
        window.open('mailto:fiillina.anastasia@gmail.com', '_blank');
    }

    const openGitHub = () => {
        window.open('https://github.com/AnastasiaOwl', '_blank');
    }

    return (
        <>
        {showMap && (
            <Modal onClose={closeMap}>
                <form className='map-form'>
                    <NavLink to="/About" className="link" activeClassName="active" onMouseEnter={play}>
                        About {location.pathname === "/" && <FontAwesomeIcon icon={faLocationDot} className="location-dot" />}
                    </NavLink>
                    <NavLink to="/Tech" className="link" activeClassName="active" onMouseEnter={play}>
                        Tech & Tools {location.pathname === "/Tech" && <FontAwesomeIcon icon={faLocationDot} className="location-dot" />}
                    </NavLink>
                    <NavLink to="/projects" className="link" activeClassName="active" onMouseEnter={play}>
                        Projects {location.pathname === "/projects" && <FontAwesomeIcon icon={faLocationDot} className="location-dot" />}
                    </NavLink>
                    <div className='text-contact'>Contact me:</div>
                    <div className='icon-container'>
                        <button type="button" className='button-icon' onClick={openTelegram} onMouseEnter={play}>
                            <FontAwesomeIcon icon={faTelegram} />
                        </button>
                        <button type="button" className='button-icon' onClick={openLinkedIn} onMouseEnter={play}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </button>
                        <button type="button" className='button-icon' onClick={openGmail} onMouseEnter={play}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                        <button type="button" className='button-icon' onClick={openGitHub} onMouseEnter={play}>
                            <FontAwesomeIcon icon={faGithub} />
                        </button>
                    </div>
                    <div className="container-cv">
                        <a href="/files/Filina_Anastasiia_CV.pdf" download>
                            <button type="button" className="button-download" onMouseEnter={play}>Download CV</button>
                        </a>
                    </div>
                </form>
            </Modal>
        )}
        </>
    );
}

export default MapModal;
