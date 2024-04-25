import React from 'react';

const Login = async (username, password) => {

    const response = await fetch(`https://147.219.135.122:7078/User/Login/${username}/${password}`) 

    const data = await response.text();
    
    return data;
};
export default Login;