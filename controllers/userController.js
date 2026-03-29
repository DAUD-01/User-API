const User = require('../models/Users');

// Create User 
const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user) 
    } catch (err) {
        next(err) // go to global error handler 
    }
};

// Read All 
const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        next(err)
    }
}