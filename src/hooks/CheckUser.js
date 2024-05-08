const CheckUser = () => {
    return localStorage.getItem('userName') !== null && localStorage.getItem('userToken') !== null;
};
export default CheckUser;