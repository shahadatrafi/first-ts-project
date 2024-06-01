import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './zod.studentValidation';
// import studentValidationSchema from './joi.studentValidation';


const createStudent = async (req: Request, res: Response) => {
  try {


    const { student: StudentData } = req.body;

    // data validation using zod

    const zodValidationData = studentValidationSchema.parse(StudentData);

    // const {error, value} = studentValidationSchema.validate(StudentData)

    // console.log({error}, {value});
    const result = await StudentServices.createStudentIntoDB(zodValidationData);


    // if(error){
    // //   res.status(500).json({
    // //     success:false,
    // //     message: 'Something went wrong',
    // //     error : error.details,
    // //   })
    // }


    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success:false,
      message: 'Something went wrong',
      error: err
    })
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
  getOneStudent,

};
