const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to DB"))
    .catch((err) => {
        console.log("Failed to connect with DB");
        console.error(err);
        process.exit(1);
    })
}

module.exports = dbConnect;