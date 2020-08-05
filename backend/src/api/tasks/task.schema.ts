import { TaskStatus }          from './constants'
import { TasksModelInterface } from './interfaces'
// @ts-ignore
import * as mongoosePaginate     from 'mongoose-paginate-v2'

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
                          enum: Object.values(TaskStatus),
                          default: TaskStatus.TODO
                        },
                        order: {
                          type: String,
                          default: 100
                        },
      
                      } , { timestamps : true } );

taskSchema.plugin(mongoosePaginate);

const Tasks = model<TasksModelInterface>('Tasks', taskSchema);

export default Tasks
