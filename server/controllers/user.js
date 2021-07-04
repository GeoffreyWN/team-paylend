const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const User = require('../model/User')


const login = async function (req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
        //check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials!!' }] });
        }

        //compare password
        const passwordMatches = await bcrypt.compare(password, user.password)

        if (!passwordMatches) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials!!' }] });
        }

        //Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtThingy'), { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token })
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
}

const register = async function (req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { fname, lname, email, gender, dob, password, confirmPassword } = req.body

    try {
        //check if user existsSync
        let user = await User.findOne({ email })

        if (user) {
            return res.status(422).json({ errors: [{ msg: `User with email ${email} already exists` }] })
        }

        if (password !== confirmPassword) {
            return res.status(422).json({ errors: [{ msg: `Password and confirm password do not match` }] })
        }

        user = new User({ fname, lname, email, gender, dob, password })

        // encrypt password before save
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        await user.save()

        //return jsonwebtoken

        const payload = {
            user: { id: user.id }
        }

        jwt.sign(payload, config.get('jwtThingy'), { expiresIn: 360000 }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
}



const updateProfile = async function (req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { fname, lname, gender, dob, password, confirmPassword } = req.body

    try {

        if (password !== confirmPassword) {
            return res.status(422).json({ errors: [{ msg: `Password and confirm password do not match` }] })
        }

        const updatedUser = new User({ fname, lname, gender, dob, password })

        // encrypt password before save
        const salt = await bcrypt.genSalt(10)
        updatedUser.password = await bcrypt.hash(password, salt)
        await updatedUser.save()

        return res.json(updatedUser)

        //return jsonwebtoken
        // const payload = {
        //     user: { id: updatedUser.id }
        // }

        // jwt.sign(payload, config.get('jwtThingy'), { expiresIn: 360000 }, (err, token) => {
        //     if (err) throw err
        //     res.json({ token })
        // })

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
}

module.exports = {register, login, updateProfile}
