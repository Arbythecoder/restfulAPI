const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    mongoose.set('strictQuery', true);
    await mongoose.connect(uri);
    console.log('In-memory MongoDB connected!');
};

module.exports = connectDB;
