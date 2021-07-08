import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../../../slices/authSlice'


const initialState = {
    fname: '',
    lname: '',
    email: '',
    gender: '',
    dob: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formValues, setFormValues] = useState(initialState)

    const { fname, lname, email, gender, password, confirmPassword, dob } = formValues

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues)

        dispatch(signup(formValues))

        setFormValues(initialState)
    }

    return (
        <>
            <h2 className="text-2xl md:text-3xl font-bold text-paylend text-center ">
                Sign Up
            </h2>

            <div className="mt-6 md:mt-12 max-w-lg mx-auto ">

                <form onSubmit={e => handleSubmit(e)}  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <label className="block text-left shadow-lg">
                            <span className="text-white text-md md:text-lg"
                            >First Name</span
                            >
                            <input
                                type="text"
                                value={fname}
                                name="fname"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50"
                                placeholder="First Name"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </label>

                        <label className="block text-left shadow-lg">
                            <span className="text-white text-md md:text-lg"
                            >Last Name</span>
                            <input
                                type="text"
                                value={lname}
                                name="lname"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50"
                                placeholder="Last Name"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </label>

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
                            <span className="text-white text-md md:text-lg"
                            >Date of birth</span
                            >
                            <input
                                type="date"
                                value={dob}
                                name="dob"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </label>

                    </div>



                    <div className="mx-auto flex justify-center py-8" >
                        <label className="block text-center">
                            {/* <span className="text-white text-md md:text-lg">Gender</span> */}

                            <div className="flex gap-6 pt-3 items-center " >
                                {/* <span className="text-white text-md md:text-lg">Gender</span> */}
                                <span className="flex gap-2">
                                    <input
                                        type="radio"
                                        value='Male'
                                        id="male"
                                        name="gender"
                                        checked={gender === 'Male'}
                                        className="mt-1 block rounded-md
                                        cursor-pointer border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50"
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                    <label htmlFor='male' className='text-white cursor-pointer'>Male</label>
                                </span>

                                <span className="flex gap-2 cursor-pointer" >
                                    <input
                                        type="radio"
                                        value='Female'
                                        id="female"
                                        name="gender"
                                        checked={gender === 'Female'}
                                        className="mt-1 block rounded-md cursor-pointer border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50"
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                    <label htmlFor='female' className='text-white cursor-pointer'>Female</label>
                                </span>
                            </div>


                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <label className="block text-left shadow-lg">
                            <span className="text-white text-md md:text-lg"
                            >Password</span
                            >
                            <input
                                type="password"
                                value={password}
                                name="password"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50"
                                placeholder="Password"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </label>

                        <label className="block text-left shadow-lg">
                            <span className="text-white text-md md:text-lg"
                            >Confirm Password</span
                            >
                            <input
                                type="password"
                                value={confirmPassword}
                                name="confirmPassword"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50"
                                placeholder="Confirm Password"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </label>

                    </div>

                    <div className="pt-12 pb-2 text-center">
                        <button
                            className="py-2 px-6 text-white bg-paylend hover:bg-paylend-dark  rounded-lg shadow-md"
                            type='submit'
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default SignUpForm
