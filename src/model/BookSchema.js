const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    author: {
        type: String,
    },
    synopsis: {
        type: String,
    },
    price: {
        type: Number,
    },
    frontPage: {
        type:String,
    },
    rating: {
        type: Number
    }
});

const Books = mongoose.model('Books', BookSchema);

module.exports = Books;