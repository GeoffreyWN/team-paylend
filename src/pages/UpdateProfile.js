import React, { useEffect, useState } from 'react'
import { selectLoggedInUser } from '../slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateuser } from '../slices/authSlice'


const UpdateProfile = () => {
    const loggedInUser = useSelector(selectLoggedInUser)
    // const { email, fname, lname, gender, dob } = loggedInUser
    console.log(loggedInUser)
    const [selectedUser] = useState(loggedInUser)

    const initialState = {
        id: selectedUser._id,
        fname: selectedUser.fname,
        lname: selectedUser.lname,
        email: selectedUser.email,
        gender: selectedUser.gender,
        dob: selectedUser.dob,
        password: '',
        confirmPassword: ''
    }

    const [formValues, setFormValues] = useState(initialState)


    const { fname, lname, email, gender, password, confirmPassword, dob } = formValues

    const history = useHistory()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues)

        dispatch(updateuser(formValues))
        history.push('/dashboard')

        setFormValues(initialState)
    }
    // const userId = loggedInUser._id

    // useEffect(() => {
    //     const fetchUser = async (req, res) => {
    //         const response = await axios.get(`http://127.0.0.1:5000/api/v1/users/fetchuser/${userId}`)
    //         const editUser = response.data
    //         setSelectedUser(editUser)
    //     }



    //     // return () => { }
    //     fetchUser()
    // }, [])

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
                                                checked={gender}
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
