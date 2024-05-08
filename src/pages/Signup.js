import React, { useState } from 'react';
import AddUser from '../hooks/AddUser';
import CheckUser from '../hooks/CheckUser';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            const data = await AddUser(username, password);
            if (data.Success) {
                alert("Successfully signed up!");
                window.location.href = '#/user';
                window.location.reload();
            }
            else {
                alert(`Failed to signup: ${data.Content}`);
            }
        } catch (error) {
            alert('Failed calling API: ', error);
        }
    };

    if(CheckUser()){
        window.location.href = '#/user';
    }

    return (
        <div className="content">
                    <h1>Signup</h1>
                    <div className="userHolder"><a href='#user'>Login</a></div>
                    <form className="userForm" onSubmit={handleSignup}>
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
                            onClick={handleSignup}>
                            Signup
                        </button>
                    </form>
        </div>
    );
}

export default Signup;