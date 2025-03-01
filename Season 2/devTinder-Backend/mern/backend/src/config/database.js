const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://divyakirantatikonda:wGqTqlkblWlXDWt3@namastenodejs.4letz.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
