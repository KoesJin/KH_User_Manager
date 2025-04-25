import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme.header};
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    transition: all 0.3s ease;
    border: 1.5 solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

const StyledLink = styled(Link)`
    background-color: white;
    color: ${(props) => props.theme.header};
    transition: all 0.3s ease;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    outline: none !important;
    padding: 6px 10px;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #e2e8f0;
        color: ${(props) => props.theme.nav};
    }
`;

const DarkModeButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 600;
    background-color: white;
    color: ${(props) => props.theme.header};
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none !important;

    &:hover {
        background-color: #e2e8f0;
    }
`;

const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <HeaderContainer>
            <Logo>
                <FaUser size={25} /> 유저관리
            </Logo>
            <Nav>
                <DarkModeButton onClick={toggleTheme}>
                    <FaMoon />
                    다크모드
                </DarkModeButton>

                <StyledLink to="/">유저 목록</StyledLink>
                <StyledLink to="/user">유저 등록</StyledLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
