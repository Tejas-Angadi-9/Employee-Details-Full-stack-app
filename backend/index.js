const express = require('express');
const app = express();

require('dotenv').config();

const dbConnect = require('./config/database');
dbConnect();

app.use(express.json());

const PORT = process.env.PORT || 5001
const userRoutes = require('./routes/allRoutes');

const cors = require('cors');
app.use(cors({
    origin: '*',
}));

app.use('/api/v1', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})


app.get('/', (req, res) => {
    res.send(`<h1>This is the home page</h1>`)
})


