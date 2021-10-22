import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export default function App() {
    return (
        <Container>
            <Header />
        </Container>
    )
}
