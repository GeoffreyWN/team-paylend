import React from 'react'
import { MailIcon, PencilAltIcon } from '@heroicons/react/solid'
import Avatar from '../assets/images/avatar.png'


const Dashboard = () => {
    return (
        <div className="bg-red-50 py-10 px-8 my-auto" >
            <div className=" px-4 py-10 my-10 max-w-screen-md mx-auto space-y-8 bg-red-100 rounded-xl shadow-xl flex flex-col justify-center items-center">

                <div className="">
                    <img src={Avatar} alt="profile" loading='lazy' className="rounded-full h-40" />
                </div>

                <div className="space-y-8 text-center" >
                    <h1 className="text-paylend-dark text-2xl">Sir Daniel Waweru</h1>
                    <h2>Software Engineer from Kenya. Let's build the future #fintech</h2>
                    <p className="flex items-center justify-center gap-2">  <MailIcon className="h-5 text-paylend-dark opacity-80" /> cool@wesh.com</p>
                </div>

                {/* <div className="flex gap-6">
                    <MailIcon className="h-5 text-paylend-dark opacity-80" />
                </div> */}

                <div className="flex gap-4">
                    <h2>Gender: Male</h2>
                    <h2> DOB: 24th March 1990</h2>
                </div>

                <div className="flex justify-center">
                    <button className="btn-edit flex items-center"> <PencilAltIcon className="h-5 pr-2" /> Edit  </button>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
