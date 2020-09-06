const services = require('../services');

const isValidTitle = ({ body }, res, next) => {
  const { error } = services.validTitle.validate(body);
  if (error) {
    return res.status(422).json({
      code: 'bad_data',
      message: error.details[0].message,
    })
  }
  return next();
};

module.exports = {
  isValidTitle,
};
