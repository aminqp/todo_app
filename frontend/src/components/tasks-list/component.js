import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { actions } from '#store';
import {
  CardContainer, debounce, TaskCard
} from '#widgets';

import { TaskForm } from '../task-form';
import { ViewTask } from '../view-task';

const TasksList = ({
  type, tasks, changeTaskStatus, deleteTask, updateTask, ...otherProps
}) => {
  const [tasksList, setTasksList] = useState(tasks[type]);
  const [searching, setSearching] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [formData, setFormData] = useState(null);
  const [viewTask, setViewTask] = useState(null);

  const getSearch = (value) => debounce(() => {
    if (value.length > 0) {
      const rg = new RegExp(value.toLowerCase());
      const tmp = tasks[type].docs.filter((item) => rg.test(encodeURI(item.name.toLowerCase())));
      setTasksList({
        ...tasks[type],
        docs: tmp
      });
    } else {
      setSearching(false);
      setTasksList(tasks[type]);
    }
    setSearching(false);
  }, 600);

  const onSearch = (value) => {
    setSearching(true);
    getSearch(encodeURI(value))();
  };

  const removeLoader = () => {
    setSelectedCard(null);
  };

  const submitAction = (actionType, data) => {
    setSelectedCard(data);
    switch (actionType) {
      case 'edit':
        return setFormData(data);
      case 'remove':
        return deleteTask(data)
          .then((res) => {
            removeLoader();
          });
      default:
        return changeTaskStatus(actionType, data)
          .then((res) => {
            removeLoader();
          });
    }
  };

  const onUpdateTask = (values) => {
    updateTask({
      ...formData,
      ...values
    })
      .then((res) => {
        setFormData(null);
        removeLoader();
      })
      .catch((e) => {
        /* TODO-qp:: handle error */
      });
  };

  useEffect(() => {
    setTasksList(tasks[type]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks[type]]);

  return (
    <CardContainer
      title={`global.${type}`}
      tasksList={tasksList}
      onSearch={onSearch}
      onFocue={onSearch}
      {...otherProps}
    >
      <LinearProgress
        style={{
          opacity: searching ? '1' : '0',
          transition: 'opacity .3s linear',
          width: '100%'
        }}
      />
      {
        Array.isArray(tasksList.docs) && tasksList.docs.map((item) => (
          <TaskCard
            loading={selectedCard?._id === item._id}
            onTaskView={() => setViewTask(item)}
            key={`${item.status}--${item.createdAt}`}
            data={item}
            submitAction={submitAction}
          />
        ))
      }
      <TaskForm
        data={formData}
        open={!!formData}
        submit={onUpdateTask}
        onClose={() => {
          removeLoader();
          setFormData(null);
        }}
      />
      <ViewTask
        onClose={() => {
          removeLoader();
          setViewTask(null);
        }}
        onOpen={() => null}
        data={viewTask}
        open={!!viewTask}
      />
    </CardContainer>
  );
};

TasksList.propTypes = {
  changeTaskStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  updateTask: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  changeTaskStatus: actions.changeTaskStatusAction,
  deleteTask: actions.deleteTaskAction,
  updateTask: actions.updateTaskAction
};
export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
