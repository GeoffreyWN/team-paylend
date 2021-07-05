import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { selectAuthStatus } from '../slices/authSlice'
import { useSelector } from 'react-redux'



const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(selectAuthStatus)


    return(
        <Route {...rest} render={props => !isAuthenticated ? (<Redirect to="/login" />) : (<Component {...props} />)} />
    )
   
}

// PrivateRoute.propTypes = {
//     auth: PropTypes.object.isRequired,
// }

// const mapStateToProps = state => ({
//     auth: state.auth
// })

export default PrivateRoute
