import React, { createContext, useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UserContext = createContext();

const userList = [
    {
        userNo: 1,
        name: '안준호',
        age: 25,
        isOnline: false,
        role: '일반회원',
        email: 'ajh25@example.com',
        joinDate: '2023-04-01',
        profileImg: 'https://i.pinimg.com/736x/d1/1b/f6/d11bf6ba15563c514c1fe370895c7e65.jpg',
        greetingMsg: '반갑습니다',
    },
    {
        userNo: 2,
        name: '박민수',
        age: 23,
        isOnline: true,
        role: '관리자',
        email: 'pms23@example.com',
        joinDate: '2022-12-15',
        profileImg: 'https://i.pinimg.com/736x/e9/c6/92/e9c692d5adaef54de0fc98e829cc1e13.jpg',
        greetingMsg: '안녕하세요 박민수에요',
    },
    {
        userNo: 3,
        name: '안승상',
        age: 35,
        isOnline: true,
        role: '일반회원',
        email: 'ass35@example.com',
        joinDate: '2021-08-19',
        profileImg: 'https://i.pinimg.com/736x/aa/a4/6a/aaa46a22d2b4e4cebc6a62079c192f0c.jpg',
        greetingMsg: '집가고 싶어',
    },
    {
        userNo: 4,
        name: '이현준',
        age: 29,
        isOnline: false,
        role: '관리자',
        email: 'lhj29@example.com',
        joinDate: '2020-01-30',
        profileImg: 'https://i.pinimg.com/736x/f0/3a/6e/f03a6e1ddd31e5cac92b026271827449.jpg',
        greetingMsg: '딱대',
    },
    {
        userNo: 5,
        name: '전범길',
        age: 27,
        isOnline: false,
        role: '일반회원',
        email: 'jbg27@example.com',
        joinDate: '2023-05-05',
        profileImg: 'https://i.pinimg.com/736x/10/20/e9/1020e9071addf022c51176d4142d0c79.jpg',
        greetingMsg: '안녕하세요',
    },
    {
        userNo: 6,
        name: '김학수',
        age: 25,
        isOnline: true,
        role: '일반회원',
        email: 'khs25@example.com',
        joinDate: '2023-06-01',
        profileImg: 'https://i.pinimg.com/736x/e3/ca/ee/e3caeec744816c0239cb88f479877b2d.jpg',
        greetingMsg: '휴가주세요',
    },
    {
        userNo: 7,
        name: '박현주',
        age: 25,
        isOnline: false,
        role: '일반회원',
        email: 'phj25@example.com',
        joinDate: '2023-03-17',
        profileImg: 'https://i.pinimg.com/736x/04/6c/ee/046cee62bd2fa62143269227a9ac0490.jpg',
        greetingMsg: '덤비던가 ㅋㅋ',
    },
    {
        userNo: 8,
        name: '손정민',
        age: 31,
        isOnline: true,
        role: '관리자',
        email: 'sjm31@example.com',
        joinDate: '2022-07-11',
        profileImg: 'https://i.pinimg.com/736x/d6/e6/68/d6e66867b756ed7b77655e51b3f18e0e.jpg',
        greetingMsg: 'ㅎㅇㅎㅇ',
    },
    {
        userNo: 9,
        name: '신용범',
        age: 35,
        isOnline: true,
        role: '일반회원',
        email: 'syb35@example.com',
        joinDate: '2023-01-10',
        profileImg: 'https://i.pinimg.com/736x/d0/8c/14/d08c14ed55d5ac1429e6ccf7fe403ad4.jpg',
        greetingMsg: '연락 ㄴ',
    },
];

export function UserProvider({ children }) {
    const [userInfoes, setUserInfoes] = useState(() => {
        // 리렌더링시에 값이 있다면 로컬스토리지에서 userInfoes 가져옴
        const savedData = localStorage.getItem('userInfoes');
        // 로컬스토리지에서 값을 가져올려면 문자열값을 JSON으로 다시 파싱해서 가져와야함
        return savedData ? JSON.parse(savedData) : userList;
    });

    // 처음에 한번 저장 및 유저 리스트가 바뀔때마다 저장
    useEffect(() => {
        // JSON,stringify로 저장하는 이유는 localStorage가 문자열만 저장가능하기 때문에 변환 해야함.
        localStorage.setItem('userInfoes', JSON.stringify(userInfoes));
    }, [userInfoes]);

    // find와 filter의 차이는 find는 반환값으로 객체를주고 , filter는 배열에 객체를 담아서 준다.
    const removeUser = (userNo) => {
        const updated = userInfoes.filter((user) => user.userNo !== parseInt(userNo));
        setUserInfoes(updated);
    };

    const insertUser = (userInfo) => {
        setUserInfoes([...userInfoes, userInfo]);
    };

    return <UserContext.Provider value={{ userInfoes, removeUser, insertUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
    return useContext(UserContext);
}
