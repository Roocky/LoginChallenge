
const setThumbNailLocation = async(userName, location) => {
    localStorage.setItem(userName, location)
}

const getThumbNailLocation = async(userName) => {
    return localStorage.getItem(userName)
}

export { setThumbNailLocation,
         getThumbNailLocation }