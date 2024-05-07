const LoggedInAs = () => {
    const user = localStorage.getItem("userName");
    if(user !== null){
        return <div className="userHolder">Logged in as: <a href="#user">{user}</a></div>;
    }
    else{
        return <div className="userHolder"><a href="#user">Login</a> or <a href='#signup'>Sign Up</a></div>;
    }
}

export default LoggedInAs;