const Joi = require("@hapi/joi");
// creating a schema for validating the req obj with Joi

// Register Validation
const registerValidation = (data) => {
  const schema = {
    firstname: Joi.string().min(6).required(),
    lastname: Joi.string().min(6).required(),
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).max(1024).required(),
  };

  return Joi.validate(data, schema);
};

const loginValidation = (data) => {
  const schema = {
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).max(1024).required(),
  };

  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
