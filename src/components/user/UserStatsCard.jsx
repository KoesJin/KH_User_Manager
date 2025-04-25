import React from 'react';
import styled from 'styled-components';
import { FaUserFriends, FaUserCheck, FaChartBar } from 'react-icons/fa';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 24px;
    background-color: ${(props) => props.theme.cardWrapBg};
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const StatCard = styled.div`
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.cardBg};
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    gap: 32px;
    transition: all 0.3s ease;
`;

const IconBox = styled.div`
    font-size: 28px;
    color: ${(props) => props.color}; // 아이콘 컬러는 props 고정 사용
`;

const StatText = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.cardLabel};
`;

const Value = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.cardText};
    text-align: left;
`;

const UserStatsCard = ({ users }) => {
    const total = users.length;
    const online = users.filter((u) => u.isOnline).length;
    // reduce는 평군 구하는 함수 , toFixed는 소수점 n번쨰까지 가져오는 함수
    const avgAge = (users.reduce((sum, u) => sum + u.age, 0) / total).toFixed(1);

    return (
        <CardContainer>
            <StatCard>
                <IconBox color="#6b7280">
                    <FaUserFriends />
                </IconBox>
                <StatText>
                    <Label>총 유저</Label>
                    <Value>{total.toLocaleString()}명</Value>
                </StatText>
            </StatCard>

            <StatCard>
                <IconBox color="#22c55e">
                    <FaUserCheck />
                </IconBox>
                <StatText>
                    <Label>온라인 유저</Label>
                    <Value>{online.toLocaleString()}명</Value>
                </StatText>
            </StatCard>

            <StatCard>
                <IconBox color="#3b82f6">
                    <FaChartBar />
                </IconBox>
                <StatText>
                    <Label>평균 나이</Label>
                    <Value>{avgAge}세</Value>
                </StatText>
            </StatCard>
        </CardContainer>
    );
};

export default UserStatsCard;
