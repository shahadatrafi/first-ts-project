import Joi from "joi";

// Address Schema
const addressValidationSchema = Joi.object({
    street: Joi.string().trim().required().messages({
      'string.empty': 'Street is required',
      'any.required': 'Street is required',
    }),
    city: Joi.string().trim().required().messages({
      'string.empty': 'City is required',
      'any.required': 'City is required',
    }),
    state: Joi.string().trim().required().messages({
      'string.empty': 'State is required',
      'any.required': 'State is required',
    }),
    zipCode: Joi.string().trim().required().messages({
      'string.empty': 'Zip code is required',
      'any.required': 'Zip code is required',
    }),
  });
  
  // Contact Schema
  const contactValidationSchema = Joi.object({
    phone: Joi.string().trim().required().messages({
      'string.empty': 'Phone number is required',
      'any.required': 'Phone number is required',
    }),
    email: Joi.string().trim().email().required().messages({
      'string.empty': 'Email is required',
      'any.required': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
  });
  
  // Student Schema
  const studentValidationSchema = Joi.object({
    id: Joi.string().trim().required().messages({
      'string.empty': 'ID is required',
      'any.required': 'ID is required',
    }),
    firstName: Joi.string()
      .trim()
      .required()
      .max(15)
      .pattern(/^[A-Z][a-zA-Z]*$/, 'capitalized')
      .messages({
        'string.empty': 'First name is required',
        'any.required': 'First name is required',
        'string.max': 'First name must be less than 15 characters',
        'string.pattern.base': 'First name must be capitalized',
      }),
    lastName: Joi.string()
      .trim()
      .required()
      .max(15)
      .pattern(/^[A-Z][a-zA-Z]*$/, 'capitalized')
      .messages({
        'string.empty': 'Last name is required',
        'any.required': 'Last name is required',
        'string.max': 'Last name must be less than 15 characters',
        'string.pattern.base': 'last name must be capitalized',
      }),
    dateOfBirth: Joi.string().trim().required().messages({
      'string.empty': 'Date of birth is required',
      'any.required': 'Date of birth is required',
    }),
    address: addressValidationSchema.required().messages({
      'object.base': 'Address is required',
      'any.required': 'Address is required',
    }),
    contact: contactValidationSchema.required().messages({
      'object.base': 'Contact information is required',
      'any.required': 'Contact information is required',
    }),
    gender: Joi.string()
      .trim()
      .required()
      .valid('male', 'female')
      .messages({
        'string.empty': 'Gender is required',
        'any.required': 'Gender is required',
        'any.only': 'Gender must be either male or female',
      }),
    isActive: Joi.string()
      .trim()
      .valid('active', 'inactive')
      .default('active')
      .messages({
        'any.only': 'Status must be either active or inactive',
      }),
    emergencyContact: contactValidationSchema.required().messages({
      'object.base': 'Emergency contact is required',
      'any.required': 'Emergency contact is required',
    }),
    profilePic: Joi.string().trim().optional(),
    bloodGroup: Joi.string()
      .trim()
      .required()
      .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
      .messages({
        'string.empty': 'Blood group is required',
        'any.required': 'Blood group is required',
        'any.only': 'Blood group must be a valid type',
      }),
  });


  export default studentValidationSchema;