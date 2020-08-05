import { TaskController }  from './tasks.controller';

const taskController = new TaskController();

/* TODO-qp::
*   1) make it abstract
*   2) add middleware for validations
*   3) add middleware for  error handler
* */

const ROUTE_CONSTANTS = {
  LIST : '/tasks/',
  RETRIEVE     : '/tasks/:taskId',
  CREATE     : '/tasks/',
  DELETE     : '/tasks/:taskId',
  UPDATE     : '/tasks/:taskId',
}

export default ( app : any ) =>
{
  app.route( ROUTE_CONSTANTS.LIST )
      .get( taskController.list );
  
  app.route( ROUTE_CONSTANTS.RETRIEVE )
      .get( taskController.retrieve );
  
  app.route( ROUTE_CONSTANTS.CREATE )
      .post( taskController.create );
  
  app.route( ROUTE_CONSTANTS.UPDATE )
      .patch( taskController.update );
  
  app.route( ROUTE_CONSTANTS.DELETE )
      .delete( taskController.delete );
  
  return app;
}
