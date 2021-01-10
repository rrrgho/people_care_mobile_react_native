import { combineReducers } from "@reduxjs/toolkit"

// Login Reducer
const loginState = {
    form: {
        email: '',
        password: '',
    },
    name: 'Rian Iregho',
}
const LoginReducer = (state = loginState, action) => {
    if(action.type === 'SET_FORM'){
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType] : action.inputValue,
            }
        }
    }
    return state
}

// Register Reducer
const registerState = {
    form: {
        fullName: '',
        nik: '',
        birthData: '',
        email: '',
        password: '',
        phone: '',
        province: '',
        city: '',
    },
    name: 'Rian Iregho'
}
const RegisterReducer = (state = registerState, action) => {
    if(action.type == 'SET_FORM'){
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType] : action.inputValue,
            }
        }
    }
    return state
}

const reducer = combineReducers({
    LoginReducer,
    RegisterReducer
})

export default reducer