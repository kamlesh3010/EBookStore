import Book from "../model/bookmodel.js";

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);  // Correct usage of res to send the response
    } catch (error) {
        console.log("Errors", error);
        res.status(500).json({ message: "Server error", error });
    }
};
