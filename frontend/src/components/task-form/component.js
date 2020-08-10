import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import useTheme from '@material-ui/core/styles/useTheme';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AddIcon from '@material-ui/icons/Add';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import SaveIcon from '@material-ui/icons/Save';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { connect } from 'react-redux';

import { actions } from '#store';
import { Flex, useFetch } from '#widgets';

import styles from './style';

const TaskForm = ({ data }) => {
  const classes = styles();
  const theme = useTheme();
  const text = useIntl();
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    description: data.description,
    name: data.name
  });
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const onSubmit = () => {
    setLoading(true);
  };

  return (
    <Flex
      className={classes.container}
    >
      <Dialog
        open={openForm}
        fullScreen={fullScreen}
        onClose={() => setOpenForm(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <FormattedMessage id="forms.create-new-task" />
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={text.formatMessage({ id: 'forms.create-task.task-name' })}
            type="text"
            fullWidth
            variant="outlined"
            rowsMax={2}
            onChange={(e) => setFormData({
              ...formData,
              name: e.target.value
            })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label={text.formatMessage({ id: 'forms.create-task.task-description' })}
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            rowsMax={10}
            onChange={(e) => setFormData({
              ...formData,
              description: e.target.value
            })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForm(false)} color="primary">
            <FormattedMessage id="forms.cancel" />
          </Button>
          <Button onClick={() => onSubmit()} color="primary">
            <FormattedMessage id="forms.save" />
          </Button>
        </DialogActions>
      </Dialog>
    </Flex>
  );
};

const mapDispatchToProps = {
  createTask: actions.createTaskAction,
  updateTask: actions.updateTaskAction
};

export default connect(null, mapDispatchToProps)(TaskForm);
