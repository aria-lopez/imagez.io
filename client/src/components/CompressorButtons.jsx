import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 40%;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Button = styled.div`
    background-color: ${props => props.active ? '#081a24' : 'transparent' };
    width: 100%;
    height: 100%;
    border: transparent;
    color: inherit;
    font-family: inherit;
    align-items: center;
    justify-content: center;
    display: flex;
    transition-duration: 0.2s;
    cursor: ${props => props.active ? 'pointer' : 'inherit' };
    &:hover {
        background-color: ${props => props.active ? '#1b9ade' : '#033a59' };
    }
`;

const ButtonText = styled.h1``;

export default function CompressorButtons({ onUpload, images, compressedImages }) {
    

    const [renderStatus, setRenderStatus] = useState({ files: false, compressed: false });
    const { files, compressed } = renderStatus;
    
    useEffect(() => {
        if (images.length > 0) {
            setRenderStatus({ files: true, compressed: false });
        } else {
            setRenderStatus({ files: false, compressed: false });
        }
    }, [images]);

    useEffect(() => {
        if (compressedImages.length > 0) {
            setRenderStatus({ files: true, compressed: true });
        }
    }, [compressedImages]);

    const ButtonRender =  files === false
        ? (
            <Button active={files} onClick={(e) => onUpload(e)}>
                <ButtonText> Upload files above before compressing </ButtonText>
            </Button>
        )
        : files === true && compressed === false
        ? (
            <Button active={files} onClick={(e) => onUpload(e)}>
                <ButtonText> Click here to begin compression </ButtonText>
            </Button>
        )
        : files === true && compressed === true
        ? (
            <Button active={files} onClick={(e) => onUpload(e)}>
                <ButtonText> Download compressed files </ButtonText>
            </Button>
        )
        : null;
    return (
        <Container>
            {ButtonRender}
        </Container>
    );
}
