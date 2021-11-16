import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CompressorUpload from './CompressorUpload.jsx';
import CompressorButtons from './CompressorButtons.jsx';
import EditImagesModule from './EditImagesModule.jsx';

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
    const [imageLinks, setImageLinks] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (images.length === 0) return;
        const newImageLinks = [];
        images.forEach(image => newImageLinks.push(URL.createObjectURL(image)));
        setImageLinks(newImageLinks);
    }, [images]);

    const [render, setRender] = useState('base');

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

    function handleImageEdits(keys) {
        const newImages = [];
        keys.forEach(index => newImages.push(images[index-1]));
        setImages(newImages); 
    }

    return (
        <Container>
            { render === 'base' 
                ?   (<><CompressorUpload 
                        onImageChange={onImageChange} 
                        images={images} 
                        errorMsg={errorMsg} 
                        clearImages={clearImages} 
                        setRender={setRender}
                    />
            
                    <CompressorButtons 
                        onUpload={onUpload} 
                        images={images} 
                        compressedImages={compressedImages} 
                        clearImages={clearImages} 
                    /></>)
                : render === 'edit-images'
                ?   <EditImagesModule 
                        handleImageEdits={handleImageEdits}
                        imageLinks={imageLinks}
                    />
                : null
            }
        </Container>
    );
}
