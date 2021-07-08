import SignUpForm from "../Components/Forms/Auth/SignUpForm"
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { selectLoggedInUser } from "../slices/authSlice"


const SignUp = () => {
    const user = useSelector(selectLoggedInUser)

    if (user) {
        return <Redirect to="/dashboard" />
    }




    return (
        // <div className="page-bg pt-24 md:pt-40 pb-28 md:pb-64 px-8 h-full"></div>
        <div className="page-bg pt-24 md:pt-32 pb-28 md:pb-32 px-8  h-full">
            <div
                className="py-6 px-8 md:w-2/3 max-w-screen-md bg-gray-900 rounded-xl mx-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-200 "
            >

                <SignUpForm />

            </div>
        </div>
    )
}

export default SignUp
