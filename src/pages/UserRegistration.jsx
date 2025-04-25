import React from 'react';
import { styled } from 'styled-components';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PageLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${(props) => props.theme.background};
    transition: all 0.3s ease;
`;

const FormCard = styled.form`
    width: 100%;
    max-width: 480px;
    padding: 40px;
    background-color: ${(props) => props.theme.card};
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    color: ${(props) => props.theme.cardText};
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Title = styled.h2`
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 12px;
`;

const Input = styled.input`
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme.cardBorder};
    border-radius: 8px;
    font-size: 16px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.cardText};
    outline: none;

    &:focus {
        border-color: #4b7fcc;
    }
`;

const Button = styled.button`
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    background-color: ${(props) => props.theme.primary};
    color: white;
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;

const UserRegistration = () => {
    const { insertUser } = useUser();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [greetingMsg, setGreetingMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // 객체 만들 때 key와 value의 이름이 같으면 단축 속성이름으로 자동 key : value로 저장됨
        const newUser = {
            userNo: Date.now(),
            name,
            email,
            age: parseInt(age),
            profileImg: profileImg.trim() || 'https://i.pinimg.com/736x/5f/27/89/5f278946db703de19932d164c7b87a58.jpg',
            greetingMsg,
            role: '일반회원',
            joinDate: new Date().toISOString().split('T')[0], // T로 자르면 날짜와 시간의 배열로 나와서 그중에서 0번째에 있는 날짜만 등록
            isOnline: false,
        };

        insertUser(newUser);
        alert('유저 등록에 성공하였습니다.');
        navigate('/');
    };

    return (
        <PageLayout>
            <FormCard onSubmit={handleSubmit}>
                <Title>유저 등록</Title>
                <Input placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} required />
                <Input placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <Input placeholder="나이" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                <Input
                    placeholder="프로필 이미지 URL"
                    value={profileImg}
                    onChange={(e) => setProfileImg(e.target.value)}
                />
                <Input
                    placeholder="간단한 인사말"
                    value={greetingMsg}
                    onChange={(e) => setGreetingMsg(e.target.value)}
                    required
                />
                <Button type="submit">등록</Button>
            </FormCard>
        </PageLayout>
    );
};

export default UserRegistration;
