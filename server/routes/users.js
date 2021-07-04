const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/auth');
const User = require('../model/User')

// @router   POST api/users
// @desc     Register user
// @access   Public
router.post('/register', [
    check('fname', 'First Name is required').not().isEmpty(),
    check('lname', 'Last Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('gender', 'Gender is required').not().isEmpty(),
    check('dob', 'Date of birth is required').not().isEmpty(),
    check('password', 'Please enter a password with more than 5 chars').isLength({ min: 5 }),
    check('confirmPassword', 'Please enter a password with more than 5 chars').isLength({ min: 5 })
],
    async (req, res) => {
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

)


// @router   POST api/users
// @desc     Login user
// @access   Public
router.post('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with more than 5 chars').isLength({ min: 5 }),
],
    async (req, res) => {
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
)


// @router   PUT api/users
// @desc     update profile
// @access   private
router.post('/update', [auth, [
    check('fname', 'First Name is required').not().isEmpty(),
    check('lname', 'Last Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('gender', 'Gender is required').not().isEmpty(),
    check('dob', 'Date of birth is required').not().isEmpty(),
    check('password', 'Please enter a password with more than 5 chars').isLength({ min: 5 }),
    check('confirmPassword', 'Please enter a password with more than 5 chars').isLength({ min: 5 })
]],
    async (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { fname, lname, email, gender, dob, password, confirmPassword } = req.body
        

        try {

            let user = await User.findOne({ email })
            if (password !== confirmPassword) {
                return res.status(422).json({ errors: [{ msg: `Password and confirm password do not match` }] })
            }
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)

            if(user) {
                user = await User.findOneAndUpdate({email}, {$set: {fname, lname, gender, dob}}, {new:true} )
            }

            return res.json(user)

        } catch (error) {
            console.log(error.message)
            res.status(500).send('Server Error')
        }
    }
)


module.exports = router