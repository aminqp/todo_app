import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { actions } from '#store';
import { Flex } from '#widgets';

import { TaskForm } from '../task-form';
import styles from './style';

const CreatTask = ({ createTask }) => {
  const classes = styles();
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (values) => {
    setLoading(true);
    createTask(values)
      .then(() => {
        setOpenForm(false);
        setLoading(false);
      }).catch(() => {
        setOpenForm(false);
        setLoading(false);
      });
  };

  return (
    <Flex
      className={classes.container}
    >
      <Fab
        aria-label="save"
        color="primary"
        className={classes.addBtn}
        onClick={() => setOpenForm(true)}
        disabled={loading}
      >
        {loading ? <HourglassEmptyIcon /> : <AddIcon />}
      </Fab>
      {loading && <CircularProgress size={46} className={classes.loader} />}
      <TaskForm
        open={openForm}
        submit={submit}
        onClose={setOpenForm}
      />
    </Flex>
  );
};

CreatTask.propTypes = {
  createTask: PropTypes.func.isRequired
};

CreatTask.defaultProps = {
};

const mapDispatchToProps = {
  createTask: actions.createTaskAction
};

export default connect(null, mapDispatchToProps)(CreatTask);
