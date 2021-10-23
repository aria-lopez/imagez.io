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
    const [errorMsg, setErrorMsg] = useState('');
    
    function onImageChange(e) {
        if (e.target.files.length > 10) return setErrorMsg('You cant upload more than 10 files, please try again.');
        setImages([...e.target.files]);
        setErrorMsg('');
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
            <CompressorUpload onImageChange={onImageChange} images={images} errorMsg={errorMsg} />
            <CompressorButtons onUpload={onUpload} images={images} />
        </Container>
    );
}
