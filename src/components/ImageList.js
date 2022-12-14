import React from 'react';
import './ImageList.css';
import ImageCard from './ImagerCard'

const ImageList = (props) => { 

    const images = props.images.map((image) => {
        return <ImageCard  key={image.id} image={image} />
    });
    
    return <div className= "image-List">{images}</div>;
};

export default ImageList;