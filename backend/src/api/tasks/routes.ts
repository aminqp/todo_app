import { ROUTE_CONSTANTS } from '../../constants';
import {TaskController} from './tasks.controller'

const taskController = new TaskController()

export default (app: any) =>
{
  // app.use('/tasks')
  app.route(ROUTE_CONSTANTS.TASKS.LIST)
      .get(taskController.list);
}
