const Logout = async (token) => {

    var bodyInfo = JSON.stringify({
        'userInfo':
        {
            'token': token
        }
    });

    return fetch(`https://140.146.23.39:5001/User/Logout`, {
        method: "SET",
        headers: {
            "Content-Type": "application/json",
        },
        body: bodyInfo
    })
        .then(response => response.json())
        .catch(error => console.error(error));
};
export default Logout;