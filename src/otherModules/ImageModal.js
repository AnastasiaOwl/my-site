import React from "react";
import nextArrow from '../background-images/buttons/modified_arrow.png';
import prevArrow from '../background-images/buttons/modified_arrow2.png';
import slideSound from '../sounds/slide1.mp3'; 
import useSound from 'use-sound';
import '../styles/projects.css';

function ImageModal({ showImage, closeImage, images, currentIndex, goToNextImage, goToPrevImage }) {
    if (!showImage) return null;
    const [play] = useSound(slideSound, { volume: 0.5 });

    return (
        <div className="modal-image">
            <button className="modal-image-close" onClick={closeImage}>×</button> 
            <div className="galary">
            <button className="modal-image-prev" onClick={(e) => { 
                e.stopPropagation(); 
                play();
                goToPrevImage(); }}>
            <img src={prevArrow} alt="Prev" className="prev-arrow" />
            </button>
            <img 
                src={images[currentIndex]} 
                alt="Project" 
                className="projectImage-zoom"
            />
            <button className="modal-image-next" onClick={(e) => {
                 e.stopPropagation();
                 play();
                goToNextImage(); }}>
            <img src={nextArrow} alt="Next" className="next-arrow" />
            </button>
            </div>
        </div>
    );
}



export default ImageModal;
