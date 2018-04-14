import  {login, logout} from  './sessionStorage.js';
import { setThumbNailLocation,
         getThumbNailLocation } from './localStorage.js';

const constants = {
    minWaitTimeInMS: 550,
    waitTimeSTD: 300
}
//Fake password check that should be done in server
const checkUserCardinals = async(name, password) =>name && name.length > 0 && password && password.length > 0;

const fLogin = async(name, password)=>{
    //Add fake waiting for "server" for random time between range
    const timeToWait = generateRandomTripTime();
    await sleep(timeToWait);
    if(!await checkUserCardinals(name, password))
        return {statusCode:400, error:"You have entered an invalid username or password"};
    await login(name);//Save the user in the session (Instead of DB..)
    return {statusCode: 200};
}


const setLocForUser = async(name, location)=>{
    //Add fake waiting for "server" for random time between range
    const timeToWait = generateRandomTripTime();
    await sleep(timeToWait);
    await setThumbNailLocation(name, location);
    return {statusCode: 200};
}

const getLocForUser = async(name)=>{
    //Add fake waiting for "server" for random time between range
    const timeToWait = generateRandomTripTime();
    await sleep(timeToWait);
    const location = await getThumbNailLocation(name);
    return {statusCode: 200, location};
}

//remove the user from session
const fLogout = ()=>{
    logout();
}
const isError = (res)=>{
    const {statusCode} = res;
    return (statusCode > 299 || statusCode <200)
}
const sleep = (ms) => {
    return new Promise(resolve=>setTimeout(resolve, ms))
}

//Not pure because of random and dependency on constants
const generateRandomTripTime=()=>Math.random()*constants.waitTimeSTD + constants.minWaitTimeInMS;
export {fLogin, fLogout, isError,setLocForUser,getLocForUser};