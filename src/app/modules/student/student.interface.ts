// import { Schema, model, connect } from 'mongoose';


export interface Address {
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

export type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

export interface Contact {
    phone: string;
    email: string;
}

export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    address: Address;
    contact: Contact;
    // courses: Course[];
    gender: "male" | "female";
    // graduationDate: Date;
    isActive: 'active' | 'inactive';
    // extraCurricularActivities?: string[];
    emergencyContact?: Contact;
    profilePic?: string;
    bloodGroup?: BloodGroup;
}
