import mongoose = require('mongoose');


export interface TaskInterface
{
  name: string;
  description: string;
  status: string;
  order: number;
}
export interface TasksModel extends TaskInterface, mongoose.Document { }
