const User = require('../models/Users');

// Create User 
const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user) 
    } catch (err) {
        next(err) // go to global error handler
    }
}

// Read All 
const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        next(err)
    }
}
// Read one user
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user) {
            const err = new Error('User not found')
            err.status = 404
            return next(err)
        }
    } catch (err) {
        next(err)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if (!user) {
            const err = new Error('User not found')
            err.status = 404
            return next(err)
        }
    } catch (err) {
        next(err)
    }
}

//Delete User
const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            const err = new Error('User not found')
            err.status = 404
            return next(err)
        }
        res.send('User Deleted')
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}