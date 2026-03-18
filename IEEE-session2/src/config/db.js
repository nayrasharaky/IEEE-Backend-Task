const mongoose = require('mongoose');

async function connectDb(){
    const url = 'mongodb+srv://DevAhmed:UWQpdYIgqCOOampQ@ieee.hpuiqnm.mongodb.net/';

    if(!url){
        throw new Error('there is someting wrong with your connection string')
    }

    await mongoose.connect(url);

    return mongoose.connection;
}




module.exports = connectDb;