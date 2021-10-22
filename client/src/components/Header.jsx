import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.p`
    font-size: 48px;    
    font-weight: 900;
    font-style: italic;
    margin: 50px 0px 0px 0px;
    padding: 0;
`;

const SubTitle = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: #5c5e63;
`;

export default function Header() {
    return (
        <Container>
            <Title>imagez.io</Title>  
            <SubTitle>Simple image compressor</SubTitle>
        </Container>
    );
}
