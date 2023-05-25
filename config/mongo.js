const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    // mongoose.connect(DB_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // }, (err, res) => {
    //     if (!err) {
    //         console.log('****Conexion correcta****')
    //     } else {
    //         console.log('****Error de conexcion****')
    //     }
    // });
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(DB_URI)
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = dbConnect;

//mongodb+srv://jimcode:W8VFHENNSIS26tpa@cluster0.m6ojpoj.mongodb.net/dbapi?retryWrites=true&w=majority