import mongoose from 'mongoose';


const connectDB = async () => {
    mongoose
        .connect('mongodb://localhost:27017/lavacar') 
        .then(() => console.log('Connected to MongoDB')) 
        .catch((error) => console.log(error)); 
};

export default connectDB;