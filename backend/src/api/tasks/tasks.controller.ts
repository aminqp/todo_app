import { Request , Response } from 'express';
import * as HttpStatus        from 'http-status-codes';
import TaskService            from './tasks.service';
import { TaskStatus }         from '../../constants';

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
    const all = await this.taskService.findAll();
    
    res.json( all );
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
      res.status( HttpStatus.NO_CONTENT )
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
