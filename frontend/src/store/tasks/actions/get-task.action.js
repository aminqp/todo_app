/* eslint-disable */
import { updateTaskAction } from '#store/tasks';
import { useFetch } from '#widgets';
import { TasksCollection } from '../../../apis';
import { GET_TASKS_LIST } from '../types';


export default () => async (dispatch) => {
  
    await Promise.all([
     TasksCollection.list({
       params: {filter_by__status__: 'todo',}
      }),
    TasksCollection.list({
     params: { filter_by__status__: 'doing',}
        }),
    TasksCollection.list({
     params: { filter_by__status__: 'done',}
        }),
  ]).then(response=>{
     dispatch({
      type: GET_TASKS_LIST,
      data: {
        todo: response[0].data,
        doing: response[1].data,
        done: response[2].data,
      },
    });
  })
  
}
