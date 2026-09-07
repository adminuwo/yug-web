const Joi = require('joi');

const bookingSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  phone: Joi.string().pattern(/^[0-9+-\s]+$/).min(10).max(15).required(),
  email: Joi.string().email().required(),
  location: Joi.string().max(100).allow('', null),
  budget: Joi.string().max(50).allow('', null),
  visitDate: Joi.date().iso().min('now').required().messages({
    'date.min': 'Visit date cannot be in the past.'
  }),
  timeSlot: Joi.string().max(50).allow('', null)
});

module.exports = { bookingSchema };
