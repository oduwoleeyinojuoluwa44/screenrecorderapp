import mongoose from "mongoose";
import dotenv from "dotenv";
const url = process.env.CONNECTION_STRING;
const dbName = 'recorder';

const connectDB = () => {
    mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: { w: 'majority' },
})
  .then(() => {
    console.log('Connected to MongoDB successfully');

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}

export default connectDB;
