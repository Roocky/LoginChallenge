import {getConnectedUserName} from './sessionStorage/sessionStorage.js';

//For currently connected user (from session / param)
const setThumbNailLocation = async(location, userName) => {
    if(!storageAvailable());
        return;
    //If not get from param try getting it from session
    const connectedUserName = !userName ? getConnectedUserName() : userName;
    localStorage.setItem(connectedUserName, location)
}

//Can be place in more general file also - pure & not exported
const storageAvailable=(type='localStorage')=> {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}
export { setThumbNailLocation }