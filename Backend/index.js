import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRout from "./route/book.rout.js"
import userRout from "./route/user.rout.js"

dotenv.config();
const app = express();

app.use(cors());
const port = process.env.PORT || 3001;

const Link = process.env.MongoDBLink;

app.use(express.json());

// Connection to DB
mongoose.connect(Link, {  
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connection Done");
})
.catch((error) => {
    console.error("Error connecting to DB:", error);
});



//defining routes

app.use("/book",bookRout)
app.use("/user",userRout)

// Start the Express server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
