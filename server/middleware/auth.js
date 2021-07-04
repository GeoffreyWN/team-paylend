const jwt = require('jsonwebtoken')
const config = require('config')

const Auth = (req, res, next) => {
    const token = req.header('x-auth-token')  //fetches token from header

    //deny access if token does not exist
    if (!token) {
        return res.status(401).json({ msg: 'Access denied, not authorised' })
    }
    //verify provided token
    try {
        const derived = jwt.verify(token, config.get('jwtThingy'))
        req.user = derived.user
        next()
    } catch (error) {
        return notAuthorized(res)
    }
}

function notAuthorized(res) {
    return res.status(401).send({ errors: [{ title: 'Not Authorized', detail: 'Warning, login required' }] })
}


module.exports = Auth