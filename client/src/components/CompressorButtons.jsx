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

export default function CompressorButtons({ onUpload, images }) {
    
    const [filesSelected, setFilesSelected] = useState(null);
    
    useEffect(() => {
        images.length > 0 ? setFilesSelected(true) : setFilesSelected(false);
    }, [images]);

    return (
        <Container>
            <Button active={filesSelected} onClick={(e) => onUpload(e)}>
                <ButtonText>
                { filesSelected ? 'Click here to begin compression' : 'Upload files above before compressing' }
                </ButtonText>
            </Button>
        </Container>
    );
}
