const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Database connected successfully`);
    })
    .catch((error) => {
      console.log(`Error occured connecting Database`, error);
    });

  
};

module.exports = connectDB;
