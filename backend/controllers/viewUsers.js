const User = require('../models/user');

const allUsers = async (req, res) => {
    try {
        const users = await User.find({});

        res.status(200).json({
            success: true,
            data: users,
            message: "Successfully fetched the employees data"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err,
            message: "Failed to fetch the employees data"
        })
    }
}

module.exports = allUsers;