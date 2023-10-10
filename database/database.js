const mongoose = require("mongoose")
const express = require("express")
const {MONGODB_URL} = process.env

exports.connect = () => {

const app = express();
app.use(express.json());
    // console.log(typeof MONGODB_URL);
    
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    } )
.then(
    console.log(`DB connected Successfully`)
    )
.catch((error) => {
    console.log(`DB connection FAILED`);
    console.log(error);
    process.exit(1)
})
}