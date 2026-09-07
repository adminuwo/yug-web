const Joi = require('joi');

const chatSchema = Joi.object({
  message: Joi.string().min(1).max(500).required(),
  history: Joi.array().items(
    Joi.object({
      role: Joi.string().valid('user', 'model').required(),
      parts: Joi.array().items(
        Joi.object({
          text: Joi.string().required()
        })
      ).required()
    })
  ).max(50).allow(null),
  leadId: Joi.string().hex().length(24).allow(null, '')
});

const chatRegisterSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required()
});

module.exports = { chatSchema, chatRegisterSchema };
