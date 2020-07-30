import { TaskStatus } from '../../constants'
import { TasksModel }     from '../../interfaces'
import { model , Schema } from 'mongoose';

const taskSchema =
          new Schema( {
                        name: {
                          type: String,
                        },
                        description: {
                          type: String,
                        },
                        status: {
                          type: String,
                          enum: Object.values(TaskStatus)
                        },
                        order: {
                          type: String,
                        },
      
                      } , { timestamps : true } );

const Tasks = model<TasksModel>('Tasks', taskSchema);

export default Tasks
