import Joi from 'joi';

const createBookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    synopsis: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    rating: Joi.number().required()
})

const deleteBookSchema = Joi.object({
    id: Joi.string().required()
})

export {createBookSchema, deleteBookSchema};