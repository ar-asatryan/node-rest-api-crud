const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')


const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    //check filled fields
    if( !name || !email || !password ) {
        res.status(400)
        throw new Error('Please fill the all Data of the created user...')
    }

    // check registered user
    const userExists = await User.findOne({email})

    if( userExists ) {
        res.status(400)
        throw new Error('This user already exists...')
    }

    // password hash
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(200).json({
            _id: user.id,
            email: user.email,
            password: user.password,
            token: generateToken(user._id)
        })
    } else {
        res.status(403)
        throw new Error('Something went wrong...')
    }
})


// Login/Authentication of User...
const loginUser = asyncHandler(async (req, res) => {
    
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(user && (await bcrypt.compare(password, user.password)) ) {
        res.status(200).json({
            _id: user.id,
            email: user.email,
            password: user.password,
            token: generateToken(user._id)
        }) } else {
            res.status(403)
            throw new Error('Invalid Credentials...')
        }
})
// private logic
const getMe = asyncHandler(async (req, res) => {

    const { _id, name, email } = await User.findById(req.user.id)

    res.json({
        _id,
        name,
        email
    })
})

// Bearer

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '20d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}