// const express = require('express')
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

// api/v1/students
app.use('/api/v1/students', StudentRoutes);

const GetAController = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', GetAController);

export default app;
