import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGODB_URI, {
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

export default mongoose;
