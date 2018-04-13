//Store the user in session 
const logout = async(user) => {
    sessionStorage.setItem('userName', user.name);
}

//Remove user from session
const login = async(user) => {
    sessionStorage.removeItem('userName');
    sessionStorage.clear();//can also be the only line in this function
}

const getConnectedUserName =() => {
    sessionStorage.getItem('userName', user.name);  
}

export {getConnectedUserName};

export {logout};
export {login};
