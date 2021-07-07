import React, { useState } from 'react'
import { selectLoggedInUser } from '../slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateuser } from '../slices/authSlice'


const UpdateProfile = () => {
    const loggedInUser = useSelector(selectLoggedInUser)
    const formatted_dob = new Date(loggedInUser.dob)
    const user_dob = formatted_dob.getFullYear() + "-" + (formatted_dob.getMonth() + 1) + "-" + formatted_dob.getDate()
    const initialState = {
        id: loggedInUser._id,
        fname: loggedInUser.fname,
        lname: loggedInUser.lname,
        email: loggedInUser.email,
        gender: loggedInUser.gender,
        dob: user_dob
    }

    const [formValues, setFormValues] = useState(initialState)


    const { fname, lname, email, gender, dob } = formValues

    const history = useHistory()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(updateuser(formValues))
        history.push('/dashboard')

        setFormValues(initialState)
    }

    return (
        <div className="bg-red-50 py-10 px-8 my-auto" >
            <div className=" px-4 py-10 my-10 max-w-screen-md mx-auto space-y-8 bg-red-100 rounded-xl shadow-xl flex flex-col justify-center items-center">

                <>
                    <h2 className="text-2xl md:text-3xl font-bold text-paylend text-center ">
                        Edit User
                    </h2>

                    <div className="mt-12 max-w-lg mx-auto ">

                        <form onSubmit={e => handleSubmit(e)}  >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <label className="block text-left shadow-lg">
                                    <span className="text-paylend-dark text-md md:text-lg"
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
                                    <span className="text-paylend-dark text-md md:text-lg"
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
                                    <span className="text-paylend-dark text-md md:text-lg"
                                    >Email address</span
                                    >
                                    <input
                                        type="email"
                                        value={email}
                                        readOnly
                                        disabled
                                        name="email"
                                        className="mt-1 block w-full rounded-md bg-gray-200  border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50"
                                        placeholder="name@yourdomain.com"
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </label>



                                <label className="block text-left shadow-lg">
                                    <span className="text-paylend-dark text-md md:text-lg"
                                    >Date of birth</span>
                                    <input
                                        type="text"
                                        value={dob}
                                        name="dob"
                                        min="1950-01-01" max="2020-12-31"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </label>

                            </div>



                            <div className="mx-auto flex justify-center py-8" >
                                <label className="block text-paylend-dark">
                                    {/* <span className="text-paylend-dark text-md md:text-lg">Gender</span> */}

                                    <div className="flex gap-6 pt-3 items-center " >
                                        <span className="text-paylend-dark text-md md:text-lg"> Gender:</span>
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
                                            <label htmlFor='male' className='text-paylend-dark cursor-pointer'>Male</label>
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
                                            <label htmlFor='female' className='text-paylend-dark cursor-pointer'>Female</label>
                                        </span>
                                    </div>


                                </label>
                            </div>

                            <div className="pt-12 pb-2 text-center">
                                <button
                                    className="py-2 px-6 text-white bg-paylend hover:bg-paylend-dark  rounded-lg shadow-md"
                                    type='submit'
                                >
                                    Update User
                                </button>
                            </div>
                        </form>

                    </div>
                </>

            </div>
        </div>
    )
}

export default UpdateProfile
