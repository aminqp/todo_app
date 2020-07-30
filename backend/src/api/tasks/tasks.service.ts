import { TaskInterface }      from '../../interfaces'
import { Document }             from "mongoose";

import TasksModel from './task.schema';

class TasksService
{
   constructor(
       private _model = TasksModel
   ) {}
   
   async findAll(filter = {}): Promise<TaskInterface[]> {
      return this._model.find(filter).exec();
   }
   
   async findOne(filter = {}): Promise<TaskInterface|null> {
      return this._model.findOne(filter).exec();
   }
   
   async findById(id: string): Promise<TaskInterface|null> {
      return this._model.findById(id).exec();
   }
   
   async create(item: TaskInterface): Promise<TaskInterface> {
      return this._model.create(item);
   }
   
   async update(id: string, item: TaskInterface): Promise<TaskInterface> {
      return this._model
          // @ts-ignore
          .updateOne(Types.ObjectId(id), item, { new: true })
          .exec();
   }
   
   async deleteById(id: string): Promise<TaskInterface> {
      // @ts-ignore
      return this._model.deleteOne(Types.ObjectId(id)).exec();
   }
   
   async delete(filter = {}): Promise<any> {
      return this._model.deleteMany(filter).exec();
   }
   
}


export default TasksService

