import mongoose from "mongoose";

const mongoURL = "mongodb://localhost:27017/hotels";
mongoose.connect(mongoURL, {
useNewUrlParser: true,
useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("connected", ()=> {
    console.log("Connected to Mongodb server");
});

db.on("error", (err)=> {
    console.log("MongoDBB connection error: ",err);
})
db.on("disconnected", ()=> {
    console.log("MongoDB disconnected");
});

export default db;