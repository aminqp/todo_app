import { TaskInterface } from '../../interfaces';
import { Types }         from 'mongoose';
import TasksModel        from './task.schema';

/* TODO-qp::
 *   1) make it abstract
 * */
class TasksService
{
  constructor(
      private _model = TasksModel
  )
  {}
  
  async findAll( filter = {} ) : Promise<TaskInterface[]>
  {
    try
    {
      return this._model.find( filter ).exec();
    }
    catch ( e )
    {
      return [];
    }
  }
  
  async findOne( filter = {} ) : Promise<TaskInterface | null>
  {
    try
    {
      return this._model.findOne( filter ).exec();
      
    }
    catch ( e )
    {
      return null;
    }
  }
  
  async findById( id : string ) : Promise<TaskInterface | null>
  {
    try
    {
      return this._model.findById( id ).exec();
    }
    catch ( e )
    {
      return null;
    }
  }
  
  async create( item : TaskInterface ) : Promise<boolean>
  {
    try
    {
      const newTask = await this._model.create( item );
      return !!newTask._id;
    }
    catch ( e )
    {
      return false;
    }
  }
  
  async update( id : string , item : TaskInterface ) : Promise<boolean>
  {
    try
    {
      const updated = await this._model
          .updateOne( {
                        _id : Types.ObjectId( id )
                      } , item , { new : false } )
          .exec();
      
      return !!updated.nModified;
      
    }
    catch ( e )
    {
      return false;
    }
  }
  
  async deleteById( id : string ) : Promise<boolean>
  {
    
    try
    {
      const deleted = await this._model
          .deleteOne( {
                        _id : Types.ObjectId( id )
                      } ).exec();
      return !!deleted.deletedCount;
    }
    catch ( e )
    {
      return false;
    }
  }
  
  async delete( filter = {} ) : Promise<boolean>
  {
    try
    {
      const deleted = await this._model.deleteMany( filter ).exec();
      return !!deleted.deletedCount;
    }
    catch ( e )
    {
      return false;
    }
  }
  
}

export default TasksService;

