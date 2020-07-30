import { Request , Response } from 'express';
import TaskService from './tasks.service'

export class TaskController
{
  constructor(
      private taskService = new TaskService()
  ) {}
  
  list = async ( req : Request , res : Response ) =>
  {
     const all = await this.taskService.findAll()
    
    res.json( all );
  };
  
  retrieve = async ( req : Request , res : Response ) =>
  {
    res.json( {
                message : ' all tasks '
              } );
  };
  
  create = async ( req : Request , res : Response ) =>
  {
    res.json( {
                message : ' all tasks '
              } );
  };
  
  update = async ( req : Request , res : Response ) =>
  {
    res.json( {
                message : ' all tasks '
              } );
  };
  
  delete = async ( req : Request , res : Response ) =>
  {
    res.json( {
                message : ' all tasks '
              } );
  };
}
