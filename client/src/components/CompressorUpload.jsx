import React, { useState, ueEffect } from 'react';
import styled from 'styled-components';

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

const Text = styled.h1`
    position: absolute;
    right: 38%;
    top: 35%;
    z-index: 999;
    cursor: pointer;
`;

export default function Compressor() {
    return (
        <UploadContainer>
           <Text>Upload your file(s) here</Text>
            <Label>
                <Input type="file" multiple accept="image/*" />
            </Label>
        </UploadContainer>
    );
}
