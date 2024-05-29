import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: StudentData } = req.body;

    const result = await StudentServices.createStudentIntoDB(StudentData);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'All Students Found successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOneStudent = async(req: Request , res: Response)=>{

  try{
    const { studentId } = req.params;
    const result = await StudentServices.getOneStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'The specific student found successfully',
      data: result
    });
    
  }catch(err){
    console.log(err);
  }

}

export const StudentControllers = {
  createStudent,
  getStudents,
  getOneStudent
};
