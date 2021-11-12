import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const UploadContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    margin: 0px;
    height: 60%;
    border-bottom: 2px solid #919191;
    text-align: center;
    background-color: #5a6e68;
    transition-duration: 0.2s;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.active ? '#5a6e68' : '#0fd9a3' };
    }
`;

const Label = styled.label`
    min-height: 100%;
    min-width: 100%;
    cursor: pointer;
`;

const Input = styled.input`
    min-height: 100%;
    min-width: 100%;
    cusor: pointer;
    opacity: 0;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 50%;
`;

const Text = styled.h1`
    position: absolute;
    right: 38%;
    top: 35%;
    z-index: 999;
    cursor: pointer;
`;


const ImageContainer = styled.div`
    max-height: 80%;
    overflow-x: hidden;
`;

const Image = styled.img`
    max-height: 100px;
    width: auto;
`;

const Error = styled.h2`
    position: absolute;
    right: 38%;
    top: 30%;
    color: #f25c78;
`;

const ImagesBtn = styled.button`
    background-color: ${props => props.red ? '#a3394d' : '#e6ab0b'};
    transition-duration: 0.2s;
    color: inherit;
    font-family: inherit;
    min-width: 100%;
    min-height: 10%;
    font-size: 24px;
    border: transparent;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.red ? '#f25c78' : '#f7bb16' };
    }
`;

export default function CompressorUpload({ onImageChange, images, errorMsg, clearImages, setRender}) {
    const [imagePreviews, setImagePreviews] = useState([]);
    const [displayImages, setDisplayImages] = useState(false);

    useEffect(() => {
        if (images.length === 0) {
            setDisplayImages(false);
            setImagePreviews([]);
            return
        }; 
        const imageUrls = [];
        images.forEach(image => {
            imageUrls.push(URL.createObjectURL(image));
        });
        setImagePreviews(imageUrls);
        setDisplayImages(true);
    }, [images]);

    const UploadDisplay = (
        <>
           <Text>Upload your image(s) here</Text>
            <Label>
                <Input type="file" multiple accept="image/*" onChange={onImageChange} />
            </Label>
        </>
    );

    return (
        <UploadContainer active={displayImages}>
            { errorMsg !== '' ? <Error>{errorMsg}</Error> : null }
            { displayImages 
                ?   (
                        <ImageContainer>
                            { imagePreviews.map((imageUrl) => (<Image src={imageUrl} />)) }
                        </ImageContainer>
                    )
                : UploadDisplay
            }
            { displayImages 
                    ? (
                        <Row>
                            <ImagesBtn red  onClick={() => clearImages()}>Clear Images</ImagesBtn> 
                            <ImagesBtn onClick={() => setRender('edit-images')}> Edit Images</ImagesBtn>
                        </Row>
                    ) : null }
        </UploadContainer>
    );
}
