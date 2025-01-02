const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./db/db')
const userRoute = require('./router/user.routes')
const captainRoute = require("./router/captain.routes");
const mapRoute = require("./router/map.route")

const cookieParser = require('cookie-parser')


dotenv.config();

const app = express();
connectDb()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/users', userRoute);
app.use('/captains', captainRoute);
app.use('/map', mapRoute);

app.get('/', (req, res) => {
    res.send("hello world");
});


app.use((err, req, res, next) => {
    console.error
    (err.message);
    res.status(404).json({
        ststus :"error", 
        message: err.message,
    })
})
module.exports = app