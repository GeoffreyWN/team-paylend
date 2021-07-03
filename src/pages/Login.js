
const Login = () => {
    return (
        
        <div className="login-bg pt-40 pb-64 px-8  h-full">
            <div
                className="py-6 px-8 w-1/3 md:w-2/3 max-w-screen-md bg-white rounded-xl mx-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-200 "
            >
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center ">
                    Log in
                </h2>

                <div className="mt-6 max-w-lg mx-auto ">
                    <form >
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-8">
                            <label className="block text-left shadow-lg">
                                <span className="text-white text-md md:text-lg"
                                >Email address</span
                                >
                                <input
                                    type="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fp focus:ring focus:ring-fp focus:ring-opacity-50"
                                    placeholder="name@yourdomain.com"
                                />
                            </label>

                            <label className="block text-left shadow-lg">
                                <span className="text-white text-md md:text-lg">Password</span>
                                <input
                                    type="password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                                    placeholder=""
                                />
                            </label>
                        </div>

                        <div className="py-8 text-center">
                            <button
                                className="py-2 px-4 text-white bg-fp hover:bg-green-700  rounded-lg shadow-md"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
