require("dotenv").config();
const mongoose = require("mongoose");

const mongo_uri = process.env.MONGO_URI;
const options = process.env.MONGO_OPTIONS;

const connectToMongoDB = () => {
  mongoose
    .connect(mongo_uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB.");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectToMongoDB;