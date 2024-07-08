import { Error } from 'mongoose';
import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(studentDta); //built in static method

  // using instance method
  const student = new Student(studentData); // creating instance

  if(await student.isUserExists(studentData.id)){
    throw new Error('User already exist....!');
  }

  const result = await student.save(); //built in static method
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getOneStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getOneStudentFromDB,
};
