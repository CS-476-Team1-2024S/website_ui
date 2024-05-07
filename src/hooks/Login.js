const Login = async (username, password) => {

    var bodyInfo = JSON.stringify({
        'userInfo':
        {
            'username': username,
            'password': password
        }
    });

    return fetch(`https://localhost:5001/User/Login`, {
        method: "SET",
        headers: {
            "Content-Type": "application/json",
        },
        body: bodyInfo
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
};
export default Login;