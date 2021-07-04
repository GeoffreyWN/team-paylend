import LoginForm from "../Components/Forms/Auth/LoginForm"

const Login = () => {
    return (
        <div className="page-bg pt-40 pb-64 px-8  h-full">
            <div
                className="py-6 px-10 w-1/3 md:w-2/3 max-w-md bg-white rounded-xl mx-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-200 "
            >
                <LoginForm />

            </div>
        </div>
    )
}

export default Login