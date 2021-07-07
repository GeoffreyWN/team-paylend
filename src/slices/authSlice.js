import axios from 'axios'


import { createSlice } from '@reduxjs/toolkit'

// Slice
const initialState = {
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signupAction: (state, action) => {
            state.user = action.payload.user
            localStorage.setItem('token', JSON.stringify(action.payload.token))
            localStorage.setItem('user', JSON.stringify(action.payload.user))

        },

        updateUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))

        },
        loginSuccess: (state, action) => {
            state.user = action.payload.user
            localStorage.setItem('token', JSON.stringify(action.payload.token))
            localStorage.setItem('user', JSON.stringify(action.payload.user))

        },
        logoutSuccess: (state, action) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        },
    },
});

export default authSlice.reducer

// Actions

const { loginSuccess, logoutSuccess, signupAction, updateUser } = authSlice.actions

export const signup = ({ fname, lname, email, gender, password, confirmPassword, dob }) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('http://127.0.0.1:5000/api/v1/users/register', { fname, lname, email, gender, password, confirmPassword, dob }, config)
        console.log(res.data)
        dispatch(signupAction(res.data));
    } catch (error) {
        alert(error.response.data.errors[0].msg)
        return console.error(error.response.data.errors);
    }
}

export const updateuser = ({ id, fname, lname, email, gender, password, confirmPassword, dob }) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('token')
            }
        }
        const res = await axios.post(`http://127.0.0.1:5000/api/v1/users/update/${id}`, { fname, lname, email, gender, password, confirmPassword, dob }, config)
        // console.log(res.data)
        dispatch(updateUser(res.data));
    } catch (error) {
        alert(error.response.data.errors[0].msg)
        return console.error(error.response.data.errors);
    }
}

export const login = ({ email, password }) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('http://127.0.0.1:5000/api/v1/users/login', { email, password }, config)
        console.log(res.data)
        dispatch(loginSuccess(res.data));
    } catch (error) {
        alert(error.response.data.errors[0].msg)
        return console.error(error.response.data.errors);
    }
}

export const logout = () => async dispatch => {
    try {
        return dispatch(logoutSuccess())
    } catch (error) {
        return console.error(error.response.data.errors);
    }
}


// Selectors pull info from the Global store slice
export const selectLoggedInUser = (state) => state.auth.user;

