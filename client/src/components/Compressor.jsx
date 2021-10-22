import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
    return (
        <Container>
            <CompressorUpload />
            <CompressorButtons />
        </Container>
    );
}
