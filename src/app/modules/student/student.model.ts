import { Schema, model, } from 'mongoose';
import { Address, Contact, Student, } from './student.interface';




const addressSchema = new Schema<Address>( {
    street: { type: 'String' },
    city: { type: 'String' },
    state: { type: 'String' },
    zipCode: { type: 'String' },
  });

  const contactSchema = new Schema<Contact>(
    {
        phone: { type: 'String' },
        email: { type: 'String' },
      }
  );


const studentSchema = new Schema<Student>({
  id: { type: 'String' },
  firstName: { type: 'String', required: true },
  lastName: { type: 'String', required: true },
  dateOfBirth: { type: 'String' },
  address: addressSchema,
  contact: contactSchema,
  gender: ['male', 'female'],
  isActive: ['active', 'inactive'],
  emergencyContact: contactSchema,
  profilePic: { type: 'String' },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
});


export const StudentModel = model<Student>('Student', studentSchema);
