import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import UserRegistration from './pages/UserRegistration';
import UserDetail from './pages/UserDetail';
import ErrorPage from './pages/ErrorPage';
import Header from './components/common/Header';
import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/themes';
import { UserProvider } from './context/UserContext';

function App() {
    const [theme, setTheme] = useState('white');

    const toggleTheme = () => {
        setTheme(theme === 'white' ? 'black' : 'white');
    };

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <ThemeProvider theme={theme === 'black' ? darkTheme : lightTheme}>
                    <UserProvider>
                        <BrowserRouter>
                            <Header />
                            <Routes>
                                <Route path="/" element={<UserList />} />
                                <Route path="/user" element={<UserRegistration />} />
                                <Route path="/user/:userNo" element={<UserDetail />} />
                                <Route path="*" element={<ErrorPage />} />
                            </Routes>
                        </BrowserRouter>
                    </UserProvider>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
