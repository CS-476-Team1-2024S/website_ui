const Login = async (username, password) => {

    var bodyInfo = JSON.stringify({
        'userInfo':
        {
            'username': username,
            'password': password
        }
    });

    return fetch(`https://140.146.23.39:5001/User/Login`, {
        method: "SET",
        headers: {
            "Content-Type": "application/json",
        },
        body: bodyInfo
    })
        .then(response => response.json())
        .catch(error => console.error(error));
};
export default Login;