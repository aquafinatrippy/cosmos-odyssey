import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Connect to MongoDB
if (process.env.NODE_ENV === "production") {

  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
}else{
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
}


// Connection
const db = mongoose.connection;

// Listen for events
db.on("error", console.error.bind(console, "Mongoose connection error"));

// Close connection if application exits
process.on("SIGINT", () => db.close());

export default mongoose;
