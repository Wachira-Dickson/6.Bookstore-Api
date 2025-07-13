const mongoose = require('mongoose');

const connectToDB = async()=>{
    try {
        await mongoose.connect('mongodb+srv://dicksonwachira886:dicksonwachira888@cluster0.ubxfmog.mongodb.net/');
        console.log('mongodb is connected successfully');
    }catch(error){
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectToDB