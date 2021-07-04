import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <div className=" px-8 bg-paylend-dark" >
            <nav className=" py-6 flex max-w-screen-xl  mx-auto ">
                {/* left */}
                <div className="flex-grow">
                    <h1 className="text-2xl text-white">Team Paylend</h1>
                </div>

                {/* right */}
                <div className="flex gap-8">
                    {/* <button className="py-2 px-3 rounded-md text-white transition duration-200 ease-in hover:bg-white hover:text-paylend    ">Dashboard</button> */}

                    {isLoggedIn ? (<Link to='/dashboard' className="navbar-btn">My Acccount</Link>
                    ) : (
                        <>
                            <Link to='/login' className="navbar-btn">Login</Link>
                            <Link to='/signup' className="navbar-btn">Sign Up</Link>
                        </>)}

                </div>
            </nav>
        </div>
    )
}

export default Header
