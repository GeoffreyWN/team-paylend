import LoginForm from "../Components/Forms/Auth/LoginForm"
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { selectLoggedInUser } from "../slices/authSlice"




const Login = () => {
    const user = useSelector(selectLoggedInUser)

    if (user) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="page-bg pt-24 md:pt-40 pb-28 md:pb-64 px-8 h-full">
            <div
                className="py-5 md:py-6 px-8 md:px-10 md:w-2/3 max-w-md bg-white rounded-xl mx-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-200 "
            >
                <LoginForm />

            </div>
        </div>
    )
}

export default Login
