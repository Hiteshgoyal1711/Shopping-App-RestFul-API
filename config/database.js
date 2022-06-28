const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(
        `Mongodb sucessfully connected with server ${data.connection.host}`
      );
    });
};


module.exports = connectDatabase;
