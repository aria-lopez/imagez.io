import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CompressorUpload from './CompressorUpload.jsx';

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    width: 800px;
    height: 500px;
    border: 1.5px solid #0fd9a3;
    border-radius: 5px;
    box-shadow: 0px 0px 30px #0fd9a3;
    padding: 0;
`;

const UploadContainer = styled.div`
    min-width: 100%;
    margin: 0px;
    height: 60%;
    border-bottom: 2px solid #919191;
    text-align: center;
    background-color: #5a6e68;
    transition-duration: 0.2s;
    cursor: pointer;
    &:hover {
        background-color: #0fd9a3;
    }
`;

export default function Compressor() {
    return (
        <Container>
            <CompressorUpload />
        </Container>
    );
}
