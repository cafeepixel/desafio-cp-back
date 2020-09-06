const Joi = require('joi');

const validBook = Joi.object({
  name: Joi
    .string()
    .min(1)
    .required(),
  title: Joi
    .string()
    .min(5)
    .required(),
  description: Joi
    .string()
    .min(10)
    .required(),
  imageUrl: Joi
    .string()
    .min(10)
    .required(),
  price: Joi
    .number()
    .min(0)
    .required(),
  priceDiscount: Joi
    .number()
    .min(0)
    .required(),
  stars: Joi
    .number()
    .min(0)
    .required(),
  review: Joi
    .string()
    .min(2)
    .required(),
});

module.exports = validBook;
