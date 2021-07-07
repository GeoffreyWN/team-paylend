import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser, logout } from '../../../slices/authSlice'
import { useHistory } from "react-router-dom";



const Header = () => {
    const user = useSelector(selectLoggedInUser)

    const dispatch = useDispatch()
    const history = useHistory()
    const logoutUser = () => {
        dispatch(logout())
        history.push("/login");
        console.log('logout clikced')
    }



    return (
        <div className=" px-4 md:px-8 bg-paylend-dark" >
            <nav className=" py-6 flex max-w-screen-xl  mx-auto ">
                {/* left */}
                <div className="">
                    <h1 className="text-3xl text-white cursor-pointer scale-100 transition duration-200 transform hover:scale-105 hover:text-red-200 hover:font-semibold " onClick={() => history.push('/dashboard')}>Team Paylend</h1>
                </div>
                <div className="flex-grow">
                </div>

                {/* right */}
                <div className="flex gap-2 md:gap-8">
                    {/* <button className="py-2 px-3 rounded-md text-white transition duration-200 ease-in hover:bg-white hover:text-paylend    ">Dashboard</button> */}

                    {user ? (<button onClick={logoutUser} className="navbar-btn">Log out</button>
                    ) : (
                        <>
                            <Link to='/login' className="navbar-btn">Login</Link>
                            <Link to='/signup' className="navbar-btn hidden md:inline-block ">Sign Up</Link>
                        </>)}

                </div>
            </nav>
        </div>
    )
}

export default Header
