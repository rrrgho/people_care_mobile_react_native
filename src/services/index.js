import axios from "axios"

export const loginAttempt = (email,password) => {
    alert('Email : ' +email+'    Password : ' + password)
}





// Validation Service
export const emailFormat = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (reg.test(email) === false) {
        return false
    }
    return true
}