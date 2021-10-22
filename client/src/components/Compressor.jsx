import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CompressorUpload from './CompressorUpload.jsx';
import CompressorButtons from './CompressorButtons.jsx';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 800px;
    height: 500px;
    border: 1.5px solid #0fd9a3;
    border-radius: 5px;
    box-shadow: 0px 0px 30px #0fd9a3;
    padding: 0;
`;

export default function Compressor() {
    const [images, setImages] = useState([]);
    
    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    function onUpload(e) {
        e.preventDefault();
        
        let formData = new FormData();
        
        for (const key of Object.keys(images)) {
            formData.append('images', images[key]);
        }
        
        // Axios post here
    }

    return (
        <Container>
            <CompressorUpload onImageChange={onImageChange} images={images} />
            <CompressorButtons onUpload={onUpload} images={images} />
        </Container>
    );
}
