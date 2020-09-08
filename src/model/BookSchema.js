const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, "Mandatory"]
    },
    author: {
        type: String,
        required: [true, "Mandatory"]
    },
    synopsis: {
        type: String,
        required: [true, "Mandatory"]
    },
    price: {
        type: Number,
        required: [true, "Mandatory"]
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