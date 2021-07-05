import axios from 'axios'


import { createSlice } from '@reduxjs/toolkit'

// Slice
// const initialToken = localStorage.getItem('token')

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signupAction: (state, action) => {
            // state.token = action.payload;
            state.user = action.payload.user
            state.isAuthenticated = true;
            localStorage.setItem('token', JSON.stringify(action.payload.token))

        },
        loginSuccess: (state, action) => {
            // state.token = action.payload;
            state.isAuthenticated = true;
            state.user = action.payload.user
            localStorage.setItem('token', JSON.stringify(action.payload.token))

        },
        logoutSuccess: (state, action) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token')
        },
    },
});

export default slice.reducer

// Actions

const { loginSuccess, logoutSuccess, signupAction } = slice.actions

export const signup = ({ fname, lname, email, gender, password, confirmPassword, dob }) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // const body = JSON.stringify({ fname, lname, email, gender, password, confirmPassword, dob })
        const res = await axios.post('http://127.0.0.1:5000/api/v1/users/register', { fname, lname, email, gender, password, confirmPassword, dob }, config)
        // console.log(body)
        console.log(res.data)
        dispatch(signupAction(res.data));
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
        // await api.post('/api/auth/login/', { email, password })
        dispatch(loginSuccess(res.data));
    } catch (error) {
        alert(error.response.data.errors[0].msg)
        return console.error(error.response.data.errors);
    }
}

export const logout = () => async dispatch => {
    try {
        // await api.post('/api/auth/logout/')
        return dispatch(logoutSuccess())
    } catch (error) {
        return console.error(error.response.data.errors);
    }
}

export const selectAuthStatus = (state) => state.auth.isAuthenticated;

// Selectors pull info from the Global store slice
export const selectLoggedInUser = (state) => state.auth.user;
