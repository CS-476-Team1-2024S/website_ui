import React, { useState } from 'react';
import Login from '../hooks/Login';
import Logout from '../hooks/Logout';
import CheckUser from '../hooks/CheckUser';

const UserPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogout = async () => {
        try {
            const data = await Logout(localStorage.getItem('userToken'));
            if (data.Success) {
                localStorage.removeItem('userName');
                localStorage.removeItem('userToken');
                window.location.reload();
            }
            else {
                alert(`Failed to logout: ${data.Content}`);
            }
        } catch (error) {
            alert('Failed calling API: ', error);
        }
    };

    const handleLogin = async () => {
        try {
            const data = await Login(username, password);
            if (data.Success) {
                localStorage.setItem('userName', username);
                localStorage.setItem('userToken', data.Data.Token);
                window.location.reload();
            }
            else {
                alert(`Failed to login: ${data.Content}`);
            }
        } catch (error) {
            alert('Failed calling API: ', error);
        }
    };

    return (
        <div className="content">
            {(CheckUser()) ?
                <><h1>Logged in as: {localStorage.getItem('userName')}</h1>
                    <button className="userHolder" onClick={handleLogout}>Logout</button></> :
                <><div className="userHolder"><a href='#signup'>Sign Up</a></div>
                    <h1>Login</h1>
                    <form className="userForm" onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        /><br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br/>
                        <button
                            onClick={handleLogin}>
                            Login
                        </button>
                    </form></>}
        </div>
    );
}

export default UserPage;
