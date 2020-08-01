import {
  TaskInterface ,
  ListsFilterOptionsInterface ,
  ListsPaginationOptionsInterface ,
  ListsSortOptionsInterface
}                    from '../../interfaces';
import * as mongoose from 'mongoose';
import TasksModel    from './task.schema';
import {
  ListsFilterOptions ,
  ListsPaginationOptions ,
  ListsSortOptions ,
  TaskStatus
}                    from '../../constants';

/* TODO-qp::
 *   1) make it abstract
 * */
class TasksService
{
  constructor(
      private _model = TasksModel
  )
  {
    console.log( '\n\n constructor => this._model -> ' , this._model );
  }
  
  async findAll(
      filtersOptions : ListsFilterOptionsInterface ,
      paginationOptions : ListsPaginationOptionsInterface ,
      sortOptions : ListsSortOptionsInterface
  ) : Promise<TaskInterface[]>
  {
    const { __name__ , __status__ } = filtersOptions;
    const { __pageSize__ , __pageNumber__ } = paginationOptions;
    const { __createdAt__ , __updatedAt__ } = sortOptions;
    
    const canPaginate = () =>
    {
      if ( !__pageNumber__ || !__pageSize__ || __pageSize__ === -1 )
      {
        return { pagination : false };
      }
      return {
        pagination                                : true ,
        [ ListsPaginationOptions.__pageSize__ ]   : __pageSize__ ,
        [ ListsPaginationOptions.__pageNumber__ ] : __pageNumber__
      };
    };
    
    try
    {
      const query = {
        ...(
            __name__ ? {
              [ ListsFilterOptions.__name__ ] :
                  { $regex : `${ encodeURIComponent( __name__ ) }` , $options : 'gi' }
            } : {}
        ) ,
        ...(
            __status__ ? {
              [ ListsFilterOptions.__status__ ] : `${ encodeURIComponent( __status__ ) }`
            } : {}
        )
      };
      
      const options = {
        sort : {
          ...(
              __createdAt__ ? { [ ListsSortOptions.__createdAt__ ] : __createdAt__ } : {}
          ) ,
          ...(
              __updatedAt__ ? { [ ListsSortOptions.__updatedAt__ ] : __updatedAt__ } : {}
          )
        } ,
        ...canPaginate()
        
      };
      
      console.log( ' findAll => options -> ' , options );
      
      return this._model
          // @ts-ignore
          .paginate( query , options );
      // .find({
      //   ...(
      //       filters.name ? {name: { $regex : `${filters.name}`, $options: "gi"}} : {}
      //   )
      //       })
      // .sort(pagination.sort)
      // .skip( pagination.pageNumber * pagination.pageSize )
      // .limit( pagination.pageSize *1)
      // .exec();
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
                        _id : mongoose.Types.ObjectId( id )
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
                        _id : mongoose.Types.ObjectId( id )
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

