import { ROUTE_CONSTANTS } from '../../constants';
import { TaskController }  from './tasks.controller';

const taskController = new TaskController();

/* TODO-qp::
*   1) make it abstract
*   2) merged all route files
* */
export default ( app : any ) =>
{
  app.route( ROUTE_CONSTANTS.TASKS.LIST )
      .get( taskController.list );
  
  app.route( ROUTE_CONSTANTS.TASKS.RETRIEVE )
      .get( taskController.retrieve );
  
  app.route( ROUTE_CONSTANTS.TASKS.CREATE )
      .post( taskController.create );
  
  app.route( ROUTE_CONSTANTS.TASKS.UPDATE )
      .patch( taskController.update );
  
  app.route( ROUTE_CONSTANTS.TASKS.DELETE )
      .delete( taskController.delete );
  
  return app;
}
