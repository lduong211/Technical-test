import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './components/Login';
import Home from './components/Home';
import useToken from './components/useToken';

function App() {
    
    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    )
}

export default App;
