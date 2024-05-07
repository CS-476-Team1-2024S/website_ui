import CheckUser from "../hooks/CheckUser";

const LoggedInAs = () => {
    if(CheckUser()){
        return <div className="userHolder">Logged in as: <a href="#user">{localStorage.getItem('userName')}</a></div>;
    }
    else{
        return <div className="userHolder"><a href="#user">Login</a> or <a href='#signup'>Sign Up</a></div>;
    }
}

export default LoggedInAs;