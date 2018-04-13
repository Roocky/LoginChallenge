import  {login, logout} from  './sessionStorage';


//Fake password check that should be done in server
const checkUserCardinals = async(userName, password) =>userName && userName.length > 0 && password && password.length > 0;

const tryLogin = async(userName, password)=>{
    //Add fake waiting...
    if(!await checkUserCardinals(userName, password))
        return false;
    await login(userName);//Save the user in the session (Instead of DB..)
}



//remove the user from session
const logout = async(userName)=>{
    logout(userName);
}

export {tryLogin, logout};