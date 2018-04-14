//Store the user in session 
const logout = () => {
    sessionStorage.removeItem('userName');
    sessionStorage.clear();//can also be the only line in this function
}

//Remove user from session
const login = async(name) => {
    sessionStorage.setItem('userName', name);
}

const getConnectedUserName = () => {
    return sessionStorage.getItem('userName');
}

export {getConnectedUserName};
export {logout};
export {login};
