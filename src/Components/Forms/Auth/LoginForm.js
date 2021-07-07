import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { login } from '../../../slices/authSlice'


const initialState = {
    email: '',
    password: ''
}
const LoginForm = () => {
    const [formValues, setFormValues] = useState(initialState)

    const { email, password } = formValues

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
        dispatch(login(formValues))
        setFormValues(initialState)
    }

    return (
        <>
            <h2 className="text-2xl md:text-3xl font-bold text-paylend text-center ">
                Log in
            </h2>
            <div className="mt-6 mx-auto ">
                <form onSubmit={e => handleSubmit(e)}  >
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-8">
                        <label className="block text-left shadow-lg">
                            <span className="text-white text-md md:text-lg"
                            >Email address</span
                            >
                            <input
                                type="email"
                                value={email}
                                name="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50"
                                placeholder="name@yourdomain.com"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </label>

                        <label className="block text-left shadow-lg">
                            <span className="text-white text-md md:text-lg">Password</span>
                            <input
                                type="password"
                                value={password}
                                name="password"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50"
                                placeholder=""
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </label>
                    </div>

                    <div className="py-8 text-center">
                        <button
                            className="py-2 px-4 text-white bg-paylend hover:bg-paylend-dark  rounded-lg shadow-md"
                            type='submit'
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-center text-white"> Create an account today! <Link to='/signup' className="text-paylend" > Sign Up</Link> </p>
            </div>
        </>
    )
}

export default LoginForm
