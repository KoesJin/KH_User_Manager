import React from 'react';
import { styled } from 'styled-components';
import User from '../components/user/User';
import UserStatsCard from '../components/user/UserStatsCard';
import { useUser } from '../context/UserContext';
import Loading from '../components/common/Loading';
import { useEffect } from 'react';
import { useState } from 'react';

const PageLayout = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 20px;
    background-color: ${(props) => props.theme.background};
    transition: all 0.3s ease;
    min-height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 15px;
`;

const ContentBox = styled.div`
    flex: 2;
`;

const SideBox = styled.div`
    flex: 1;
`;

const UserList = () => {
    // userInfoes를 커스텀훅으로 뺌
    // context로 객체로 보내기때문에 userInfoes 하나만 받아도 객체 구조 분해 할당으로 받아야 함
    const { userInfoes } = useUser();

    // 로딩 페이지를 위한 상태
    const [isLoading, setIsLoading] = useState(true);

    // 페이드 상태 관리
    const [fadeOut, setFadeOut] = useState(false);

    // api를 따로 불러오지 않았지만 api 불러왔을 때 처럼 로딩화면 구현하기 위해 useEffect사용
    useEffect(() => {
        const timer1 = setTimeout(() => {
            setFadeOut(true); // 1.5초 뒤에 페이드 시작
        }, 1500);

        const timer2 = setTimeout(() => {
            setIsLoading(false); // fade-out 끝난 뒤 로딩 제거
        }, 2100); // fade 애니메이션 시간 0.6초 더한 값

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return isLoading ? (
        // $를 써서 props으로 넘기면 DOM에 전달하지 않고, styled 컴포넌트 내부에서만 사용 가능
        <Loading $fade={fadeOut} />
    ) : (
        <PageLayout>
            <ContentBox>
                <Container>
                    {userInfoes.map((userInfo) => (
                        <User key={userInfo.userNo} card={userInfo} />
                    ))}
                </Container>
            </ContentBox>

            <SideBox>
                <UserStatsCard users={userInfoes} />
            </SideBox>
        </PageLayout>
    );
};

export default UserList;
