const connection = require('./connection');

const queryAllBooks = `SELECT
b.id,
a.name,
b.title,
b.description,
b.image_url,
b.price,
b.price_discount,
b.stars,
b.review
FROM books AS b
INNER JOIN author AS a ON b.author_id = a.id;`

const getAllBooks = async () =>
  connection()
    .then((session) =>
      session.sql(queryAllBooks)
        .execute())
    .then((results) => results.fetchAll())
    .then((books) =>
      books.map(([id, name, title, description, imageUrl, price, priceDiscount, stars, review]) => (
        { id, name, title, description, imageUrl, price, priceDiscount, stars, review }
      )))

module.exports = {
  getAllBooks,
}
