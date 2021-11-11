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
    border: 2px solid whitesmoke;
    border-radius: 5px;
    box-shadow: 0px 0px 30px #0fd9a3;
    padding: 0;
`;

export default function Compressor() {
    const [images, setImages] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const [compressedImages, setCompressedImages] = useState([]);

    const buildImageRefs = (compressedImages) => {
        const result = [];
        compressedImages.forEach(({ link, key }) => result.push(key));
        return result;
    }
    
    function onImageChange(e) {
        if (e.target.files.length > 10) return setErrorMsg('You cant upload more than 10 files, please try again.');
        setImages([...e.target.files]);
        setErrorMsg('');
    }

    function onUpload(e) {
        e.preventDefault();
        
        const form = new FormData();
        for (const singleFile of images) {
            form.append('images', singleFile);
        }
        
        axios.post('/api/upload', form, {})
            .then(({ data }) => {
                setCompressedImages(data);
            })
            .catch(err => console.log(err));
    }

    function clearImages() {
        setImages([]);
        setErrorMsg('');
        const imageRefs = buildImageRefs(compressedImages);
        axios.post('/api/delete', { imageRefs })
            .then(res => {
                setCompressedImages([]);
            })
            .catch(err => console.log(err));
    }

    return (
        <Container>
            <CompressorUpload onImageChange={onImageChange} images={images} errorMsg={errorMsg} clearImages={clearImages} />
            <CompressorButtons onUpload={onUpload} images={images} compressedImages={compressedImages} />
        </Container>
    );
}
