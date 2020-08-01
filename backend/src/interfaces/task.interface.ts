import {Document, Types} from  'mongoose';
import { TaskStatus } from '../constants'

export interface TaskInterface
{
  name: string;
  description?: string;
  status?: TaskStatus;
  order?: number;
}
export interface TasksModelInterface extends Document, TaskInterface { }
