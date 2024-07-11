// import { Schema, model, connect } from 'mongoose';

import { Model } from 'mongoose';

export interface TAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

// export interface Course {
//     courseId: string;
//     courseName: string;
//     grade: string;
// }

export type TBloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';

export interface TContact {
  phone: string;
  email: string;
}

export interface TStudent {
  id: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: TAddress;
  contact: TContact;
  // courses: Course[];
  gender: 'male' | 'female';
  // graduationDate: Date;
  isActive: 'active' | 'inactive';
  // extraCurricularActivities?: string[];
  emergencyContact?: TContact;
  profilePic?: string;
  bloodGroup?: TBloodGroup;
  isDeleted: boolean;
}


// For creating static

export interface StudentModel extends Model<TStudent>{
  isUserExists(id: string) : Promise<TStudent | null>
}


// For creating instance

// export interface StudentMethods {
//   isUserExists(id: string): Promise<TStudent | null>;
// }

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
