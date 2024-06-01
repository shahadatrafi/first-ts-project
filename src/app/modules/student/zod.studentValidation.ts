import { z } from 'zod';

// Address Schema
const addressValidationSchema = z.object({
  street: z.string().trim().min(1, { message: 'Street is required' }),
  city: z.string().trim().min(1, { message: 'City is required' }),
  state: z.string().trim().min(1, { message: 'State is required' }),
  zipCode: z.string().trim().min(1, { message: 'Zip code is required' }),
});

// Contact Schema
const contactValidationSchema = z.object({
  phone: z.string().trim().min(1, { message: 'Phone number is required' }),
  email: z.string().trim().email({ message: 'Email must be a valid email address' }).min(1, { message: 'Email is required' }),
});

// Student Schema
const studentValidationSchema = z.object({
  id: z.string().trim().min(1, { message: 'ID is required' }),
  firstName: z.string()
    .trim()
    .min(1, { message: 'First name is required' })
    .max(15, { message: 'First name must be less than 15 characters' })
    .regex(/^[A-Z][a-zA-Z]*$/, { message: 'First name must be capitalized' }),
  lastName: z.string()
    .trim()
    .min(1, { message: 'Last name is required' })
    .max(15, { message: 'Last name must be less than 15 characters' }),
  dateOfBirth: z.string().trim().min(1, { message: 'Date of birth is required' }),
  address: addressValidationSchema,
  contact: contactValidationSchema,
  gender: z.enum(['male', 'female'], { required_error: 'Gender is required' }),
  isActive: z.enum(['active', 'inactive']).default('active'),
  emergencyContact: contactValidationSchema,
  profilePic: z.string().trim().optional(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], { required_error: 'Blood group is required' }),
});

export default studentValidationSchema;
