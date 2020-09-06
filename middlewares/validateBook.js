const services = require('../services');

const isValidBook = ({ body }, res, next) => {
  const { error } = services.validBook.validate(body);
  if (error) {
    return res
      .status(422)
      .json({
        code: 'bad_data',
        message: error.details[0].message,
      })
  }
  return next();
};

module.exports = {
  isValidBook,
};
