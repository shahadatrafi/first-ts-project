import { Schema, model } from 'mongoose';
import { Address, Contact, Student } from './student.interface';
import validator from 'validator';

const addressSchema = new Schema<Address>({
  street: { type: String, required: [true, 'Street is required'], trim: true },
  city: { type: String, required: [true, 'City is required'], trim: true },
  state: { type: String, required: [true, 'State is required'], trim: true },
  zipCode: {
    type: String,
    required: [true, 'Zip code is required'],
    trim: true,
  },
});

const contactSchema = new Schema<Contact>({
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate:{
      validator: (value: string)=> validator.isEmail(value),
      message: '{VALUE} is not valid email'
    },
    trim: true,
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    unique: true,
    required: [true, 'ID is required'],
    trim: true,
  },
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [15, 'First name must be less than 15 characters'],
    validate: {
      validator: function (value: string) {
        const FirstNameStr: string =
          value.charAt(0).toUpperCase() + value.slice(1);
        return FirstNameStr === value;
      },
      message: '{VALUE} is not capitalized',
    },
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [15, 'Last name must be less than 15 characters'],
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of birth is required'],
    trim: true,
  },
  address: {
    type: addressSchema,
    required: [true, 'Address is required'],
  },
  contact: {
    type: contactSchema,
    required: [true, 'Contact information is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
    trim: true,
  },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
    trim: true,
  },
  emergencyContact: {
    type: contactSchema,
    required: [true, 'Emergency contact is required'],
  },
  profilePic: { type: String, trim: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
    required: [true, 'Blood group is required'],
    trim: true,
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
