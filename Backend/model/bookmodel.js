import mongoose from "mongoose";

const booksSchema=mongoose.Schema(
    {
        name:String,
        price:Number,
        category:String,
        image:String,
        title:String
    }
)
const Book=mongoose.model("Book",booksSchema)

export default Book;