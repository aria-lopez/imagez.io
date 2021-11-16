import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;
`;

const Image = styled.img`
    max-height: 100px;
    max-width: 100px;
    margin: 10px;
    border: 2px solid whitesmoke;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
        border: 2px solid #f7bb16;
    }
`;

const TitleRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    font-size: 24px;
    margin: 10px 0px 20px 0px;
`;


export default function EditImagesModule({ imageLinks }) {
    const [selectedImage, setSelectedImage] = useState(null);
    
    function handleClick(e, key) {
        e.preventDefault();
        setSelectedImage(imageLinks[key]);
    }

    const allImagesRender = 
        (
            <>
                <TitleRow>Click an image to edit it</TitleRow>
                { imageLinks.map((src, i) => <Image src={src} onClick={(e) => handleClick(e, i)}/>)}
            </>
        );

    const selectedImageRender = 
        (
            <>
                <img src={selectedImage} />
            </>
        );

    return (
        <Container>
            { selectedImage ? selectedImageRender : allImagesRender }
        </Container>
    );
}
