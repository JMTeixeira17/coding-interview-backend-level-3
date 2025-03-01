import Joi from 'joi'

export const createItemSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': `Field "name" must be a string`,
    'any.required': `Field "name" is required`
  }),
  price: Joi.number().required().min(0).messages({
    'number.base': `Field "price" must be a number`,
    'any.required': `Field "price" is required`,
    'number.min': `Field "price" cannot be negative`
  })
})

export const updateItemSchema = Joi.object({
  name: Joi.string().optional(),
  price: Joi.number().required().min(0).messages({
    'number.base': `Field "price" must be a number`,
    'any.required': `Field "price" is required`,
    'number.min': `Field "price" cannot be negative`
  })
})
