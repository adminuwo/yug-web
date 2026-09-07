const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  phone: Joi.string().pattern(/^[0-9+-\s]+$/).min(10).max(15).required().messages({
    'string.pattern.base': 'Phone number must contain only numbers, +, -, or spaces.'
  }),
  email: Joi.string().email().required(),
  requirement: Joi.string().required(),
  project: Joi.string().max(100).allow('', null),
  message: Joi.string().max(1000).allow('', null)
});

module.exports = { contactSchema };
