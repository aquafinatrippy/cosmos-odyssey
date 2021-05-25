const mongoose = require("mongoose");


mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
