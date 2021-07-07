import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { selectLoggedInUser } from '../slices/authSlice'
import { useSelector } from 'react-redux'



const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = useSelector(selectLoggedInUser)


    return (
        <Route {...rest} render={props => !user ? (<Redirect to="/login" />) : (<Component {...props} />)} />
    )

}

// PrivateRoute.propTypes = {
//     auth: PropTypes.object.isRequired,
// }

// const mapStateToProps = state => ({
//     auth: state.auth
// })

export default PrivateRoute
