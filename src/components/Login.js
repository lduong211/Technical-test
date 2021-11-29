import React, { useState } from 'react';
import '../assets/css/Login.css';

function Login({ setToken }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    // call API, get username and password
    async function loginUser(credentials) {
        return fetch('https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1')
            .then(res => res.json())
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        if (username === token.username && password === token.password) {
            setToken(token);
        }
        else {
            alert('Wrong username or password');
        }
    }



    return (
        <div className="main">
            <form method="post" action="/Home.js" id="register-form" className="form" onSubmit={handleSubmit}>
                <h3>Login</h3>

                <div className="spacer"></div>

                <div className="form-group">
                    <label htmlFor="fullname" className="form-label">UserName</label>
                    <input id="fullname" name="fullname" type="text" placeholder="VD: Dương Lâm"
                        onChange={e => setUserName(e.target.value)}
                        required
                    />
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">password</label>
                    <input id="password" name="password" type="password" placeholder="Your password..."
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <span className="form-message"></span>
                </div>

                <button className="form-submit" type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login;
