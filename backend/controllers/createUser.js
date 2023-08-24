const User = require('../models/user');

const createUser = async (req, res) => {
    try {
        const { name, email, designation, role, department } = req.body;

        if (!name || !email || !designation || !role || !department) {
            return res.status(401).json({
                success: false,
                message: "Fill all the fields"
            })
        }

        const exisitingUser = await User.findOne({ email });
        if (exisitingUser) {
            return res.status(401).json({
                success: false,
                message: "User already registered. Please log in"
            });
        }

        const newUser = await User.create({
            name, email, designation, role, department, image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,

        });

        res.status(200).json({
            success: true,
            user: newUser,
            message: "New user created"
        })
    }
    catch (err) {
        console.log("error", error);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Failed to create a user"
        })
    }
}

module.exports = createUser;