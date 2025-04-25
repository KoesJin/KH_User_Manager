import React from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const PageLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
    transition: all 0.3s ease;
`;

const Card = styled.div`
    width: 400px;
    background-color: ${(props) => props.theme.card};
    color: ${(props) => props.theme.cardText};
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border: 1px solid ${(props) => props.theme.cardBorder};
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const ProfileImage = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #dcdcdc;
`;

const InfoBox = styled.div`
    width: 100%;
    text-align: center;
`;

const Name = styled.h2`
    font-size: 24px;
    font-weight: bold;
`;

const Detail = styled.p`
    font-size: 16px;
    color: ${(props) => props.theme.cardText};
    margin: 4px 0;
    font-weight: 600;
`;

const Status = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => (props.$isOnline ? props.theme.onlineText : props.theme.offlineText)};
`;

const ButtonBox = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 20px;
`;

const ActionButton = styled.button`
    padding: 10px 18px;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.color || '#4b7fcc'};
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;

const UserDetail = () => {
    const { userInfoes, removeUser } = useUser();
    const { userNo } = useParams();
    const navigate = useNavigate();
    const user = userInfoes.find((user) => user.userNo === parseInt(userNo));

    return (
        <PageLayout>
            <Card>
                <ProfileImage src={user.profileImg} alt="Profile" />
                <InfoBox>
                    <Name>{user.name}</Name>
                    <Detail>나이: {user.age}세</Detail>
                    <Detail>이메일: {user.email}</Detail>
                    <Detail>가입일: {user.joinDate}</Detail>
                    <Detail>역할: {user.role}</Detail>
                    <Status $isOnline={user.isOnline}>
                        {user.isOnline ? '🟢 온라인 상태입니다' : '🔴 오프라인 상태입니다.'}
                    </Status>
                </InfoBox>
                <ButtonBox>
                    <ActionButton color="#4b7fcc" onClick={() => alert('준비중입니다.')}>
                        수정
                    </ActionButton>
                    <ActionButton
                        color="#d62727"
                        onClick={() => {
                            const deleteUser = confirm(`${user.name}님을 삭제하시겠습니까?`);

                            if (deleteUser) {
                                removeUser(user.userNo);
                                navigate('/');
                            } else {
                                return false;
                            }
                        }}
                    >
                        삭제
                    </ActionButton>
                </ButtonBox>
            </Card>
        </PageLayout>
    );
};

export default UserDetail;
