import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import UserRegistration from './pages/UserRegistration';
import UserDetail from './pages/UserDetail';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/user" element={<UserRegistration />} />
                    <Route path="/user/:id" element={<UserDetail />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
