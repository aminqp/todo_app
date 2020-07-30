import mongoose = require('mongoose');
import { TaskStatus } from '../constants'

export interface TaskInterface
{
  name: string;
  description?: string;
  status?: TaskStatus;
  order?: number;
}
export interface TasksModel extends mongoose.Document, TaskInterface { }
