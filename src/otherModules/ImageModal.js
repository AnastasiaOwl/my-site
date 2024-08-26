import React from "react";
import nextArrow from '../background-images/buttons/modified_arrow.png';
import prevArrow from '../background-images/buttons/modified_arrow2.png';
import '../styles/projects.css';

function ImageModal({ showImage, closeImage, images, currentIndex, goToNextImage, goToPrevImage }) {
    if (!showImage) return null;

    return (
        <div className="modal-image">
            <button className="modal-image-close" onClick={closeImage}>×</button> 
            <div className="galary">
            <button className="modal-image-prev" onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}>
            <img src={prevArrow} alt="Prev" className="prev-arrow" />
            </button>
            <img 
                src={images[currentIndex]} 
                alt="Project" 
                className="projectImage-zoom"
            />
            <button className="modal-image-next" onClick={(e) => { e.stopPropagation(); goToNextImage(); }}>
            <img src={nextArrow} alt="Next" className="next-arrow" />
            </button>
            </div>
        </div>
    );
}



export default ImageModal;
