import React from 'react'
import { HeartIcon } from '@heroicons/react/solid'

const Footer = () => {
    return (
        <div className="py-4 px-4 max-w-4xl mx-auto mt-auto border-t border-gray-200">
            <p className="flex items-center text-base md:text-lg justify-center">
                Built with &nbsp;<HeartIcon className="h-8 text-paylend-dark opacity-80" /> &nbsp; by
                <span className="text-paylend-dark font-semibold cursor-pointer">
                    &nbsp; GeoffreyWN</span
                >
            </p>
        </div>
    )
}

export default Footer
