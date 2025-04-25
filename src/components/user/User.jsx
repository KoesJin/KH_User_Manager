import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Card = styled(Link)`
    width: 300px;
    height: 330px;
    background-color: ${(props) => props.theme.card};
    color: ${(props) => props.theme.cardText};
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border: 1px solid ${(props) => props.theme.cardBorder};
    text-align: center;
    padding: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
`;

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 16px;
    border: 3px solid #dcdcdc;
    pointer-events: none;
`;

const Name = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin: 8px 0 4px;
    color: ${(props) => props.theme.cardText};
`;

const Age = styled.div`
    font-size: 18px;
    font-weight: normal;
    color: ${(props) => props.theme.cardText};
`;

const Bio = styled.p`
    font-size: 14px;
    color: ${(props) => props.theme.cardText};
`;

const Status = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
    color: ${(props) => (props.$isOnline ? props.theme.onlineText : props.theme.offlineText)};
`;

const User = ({ card }) => {
    return (
        <Card to={`/user/${card.userNo}`}>
            <ProfileImage src={card.profileImg} alt="Profile" />
            <Name>{card.name}</Name>
            <Age>{card.age}</Age>
            <Status $isOnline={card.isOnline}>
                {card.isOnline ? '🟢 온라인 상태입니다' : '🔴 오프라인 상태입니다.'}
            </Status>
            <Bio>{card.greetingMsg}</Bio>
        </Card>
    );
};

export default User;
