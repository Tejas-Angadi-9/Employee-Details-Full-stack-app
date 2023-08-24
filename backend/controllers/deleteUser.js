const User = require('../models/user');

const updatedUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            sucess: true,
            message: "Successfully deleted the user"
        });
    }
    catch (err) {
        console.log("Error in deleting the user");
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Couldn't delete the user"
        })
    }
}

module.exports = updatedUser;