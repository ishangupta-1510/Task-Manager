const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(
    "mongodb+srv://usa44052:ishan@cluster0.9egj9ls.mongodb.net/Task_manager?retryWrites=true&w=majority&appName=Cluster0"
  );
};

module.exports = connectDB;
