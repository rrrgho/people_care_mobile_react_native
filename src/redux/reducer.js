import { combineReducers } from "@reduxjs/toolkit"

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
                [action.inputType] : action.inputValue
            }
        }
    }
    return state
}

const reducer = combineReducers({
    LoginReducer
})

export default reducer