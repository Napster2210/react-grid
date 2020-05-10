import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  connect: () => {
    // MongoDB Connection
    console.log('Connecting database...');
    mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    const db = mongoose.connection;
    db.on("error", () => {
      console.log("> error occurred while connecting the database!");
    });
    db.once("open", () => {
      console.log("> successfully connected the database!");
    });
  }
}