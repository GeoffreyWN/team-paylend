import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = ({ children, isLoggedIn }) => {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            {children}
            <Footer />
        </>
    )
}

export default Layout
