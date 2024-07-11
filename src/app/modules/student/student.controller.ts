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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success:false,
      message: err.message || 'Something went wrong',
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err : any) {
    res.status(500).json({
      success:false,
      message: err.message || 'Something went wrong',
      error: err
    })
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
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }catch(err: any){
    res.status(500).json({
      success:false,
      message: err.message || 'Something went wrong',
      error: err
    })
  }

}

const deleteStudent = async (req: Request, res: Response) => {
  try{
    const {studentId} = req.params;
    
    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      data: result
    })
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch(err: any){
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err
    })
  }
}

export const StudentControllers = {
  createStudent,
  getStudents,
  getOneStudent,
  deleteStudent,
};
