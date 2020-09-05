CREATE DATABASE IF NOT EXISTS coffeeAndPixelBooks;

USE coffeeAndPixelBooks;

CREATE TABLE author(
  id INT AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE books(
  id INT AUTO_INCREMENT,
  author_id INT NOT NULL,
  title VARCHAR(60) NOT NULL,
  description VARCHAR(120) NOT NULL,
  image_url VARCHAR(300) NOT NULL,
  price FLOAT NOT NULL,
  price_discount FLOAT NOT NULL,
  stars FLOAT NOT NULL,
  review VARCHAR(30) NOT NULL,
  FOREIGN KEY(author_id) REFERENCES author(id),
  PRIMARY KEY(id)
);

INSERT INTO
  author(name)
VALUES
  ("Kevin Kwan"),
  ("Margaret Atwood"),
  ("Aldous Huxley"),
  ("Tara Westover");

INSERT INTO
  books(
    author_id,
    title,
    description,
    image_url,
    price,
    price_discount,
    stars,
    review
  )
VALUES
  (
    1,
    "Crazy rich asians",
    "the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...",
    "https://m.media-amazon.com/images/I/41Phm14P9IL.jpg",
    24.12,
    14.99,
    4,
    "252 review"
  ),
  (
    2,
    "The handmaid’s tale",
    "This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...",
    "https://images-na.ssl-images-amazon.com/images/I/61d98fT-yJL.jpg",
    18.99,
    6.99,
    4.1,
    "1,1M review"
  ),
  (
    3,
    "Brave new world",
    "Dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...",
    "https://images-na.ssl-images-amazon.com/images/I/51K6hPJ0buL._SX328_BO1,204,203,200_.jpg",
    42.50,
    12.43,
    4,
    "1,3M review"
  ),
  (
    4,
    "Educated",
    "It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...",
    "https://miro.medium.com/max/4922/1*Yd4GVE9k8_AIjlki6Z38eA@2x.jpeg",
    34.20,
    12.68,
    4.2,
    "364 review"
  );
