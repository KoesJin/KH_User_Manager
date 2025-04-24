import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
`;

const Message = styled.h2`
    font-size: 24px;
    color: #343a40;
    margin-bottom: 20px;
`;

const HomeButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container>
            <Message>페이지를 찾을 수 없습니다 😥</Message>
            <HomeButton onClick={handleGoHome}>홈으로 가기</HomeButton>
        </Container>
    );
};

export default ErrorPage;
