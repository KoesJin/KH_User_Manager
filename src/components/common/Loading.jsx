import React from 'react';
import { styled, keyframes } from 'styled-components';

// 페이드 아웃 애니메이션
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

// 회전 애니메이션
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffffb7;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${(props) => (props.fade ? fadeOut : 'none')} 0.6s ease-out forwards;
`;

const SpinnerContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Line = styled.div`
    position: absolute;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-bottom: 2px solid gold;
    animation: ${spin} ${(props) => props.speed || '1000ms'} linear infinite;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
`;
const Loading = ({ fade }) => {
    return (
        <Background fade={fade}>
            <SpinnerContainer>
                <Line size={100} speed="600ms" />
                <Line size={125} speed="800ms" />
                <Line size={150} speed="1000ms" />
                <Line size={175} speed="1200ms" />
            </SpinnerContainer>
        </Background>
    );
};

export default Loading;
