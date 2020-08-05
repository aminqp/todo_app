import { Request , Response }     from 'express';
import * as HttpStatus            from 'http-status-codes';
import TaskService                from './tasks.service';
import { setListResponseHeaders } from '../../shared';

/* TODO-qp::
 *   1) make it abstract
 * */
export class TaskController
{
  constructor(
      private taskService = new TaskService()
  )
  {}
  
  list = async ( req : Request , res : Response ) =>
  {
    const {
            query : {
              paginate__pageSize__ ,
              paginate__pageNumber__ ,
              sort_by___createdAt__ ,
              sort_by__updatedAt__ ,
              search_by__name__ ,
              filter_by__status__
            }
          } = req;
    
    const all = await this.taskService
        .findAll( {
                    __name__   : <string>search_by__name__ ,
                    __status__ : <string>filter_by__status__
                  } ,
                  {
                    __pageNumber__ : Number( paginate__pageNumber__ ) ,
                    __pageSize__   : Number( paginate__pageSize__ )
                  } ,
                  {
                    __createdAt__ : <string>sort_by___createdAt__ ,
                    __updatedAt__ : <string>sort_by__updatedAt__
                  }
        );
    
    res.header( setListResponseHeaders() )
      .status(HttpStatus.OK)
        .json( all );
  };
  
  retrieve = async ( req : Request , res : Response ) =>
  {
    const { params : { taskId } } = req;
    if ( !taskId )
    {
      res.status( HttpStatus.BAD_REQUEST )
          .json( {
                   error : `task id is required`
                 } );
    }
    
    const task = await this.taskService.findById( taskId );
  
    if ( !task )
    {
      res.send( HttpStatus.NOT_FOUND )
    }
    
    res.status( HttpStatus.OK )
        .json( task );
  };
  
  create = async ( req : Request , res : Response ) =>
  {
    const { body : { name , description } } = req;
    if ( !name )
    {
      res.status( HttpStatus.BAD_REQUEST )
          .send( {
                   error : `name is required`
                 } );
    }
    const newTask = await this.taskService
        .create( {
                   name ,
                   description
                 } );
    if ( !newTask )
    {
      res.status( HttpStatus.EXPECTATION_FAILED )
          .send( {
                   error : `create new task was error`
                 } );
    }
    else
    {
      res.status( HttpStatus.CREATED )
          .end();
    }
    
  };
  
  update = async ( req : Request , res : Response ) =>
  {
    const {
            params : { taskId } , body
          } = req;
    if ( !taskId )
    {
      res.status( HttpStatus.BAD_REQUEST )
          .json( {
                   error : `task id is required`
                 } );
    }
    
    const updatedTask = await this.taskService.update( taskId , body );
    
    if ( !updatedTask )
    {
      res.status( HttpStatus.EXPECTATION_FAILED )
          .send( {
                   error : `update task was error`
                 } );
    }
    else
    {
      res.status( HttpStatus.NO_CONTENT )
          .end();
    }
    
  };
  
  delete = async ( req : Request , res : Response ) =>
  {
    const {
            params : { taskId }
          } = req;
    if ( !taskId )
    {
      res.status( HttpStatus.BAD_REQUEST )
          .json( {
                   error : `task id is required`
                 } );
    }
    
    const deleted = await this.taskService.deleteById( taskId );
    
    if ( !deleted )
    {
      res.status( HttpStatus.NOT_FOUND )
          .send( {
                   error : `task id not found`
                 } );
    }
    else
    {
      res.status( HttpStatus.NO_CONTENT )
          .end();
    }
    
  };
}
