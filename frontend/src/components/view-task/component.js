import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useTheme from '@material-ui/core/styles/useTheme';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import React, { useLayoutEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Flex } from '#widgets';

import styles from './style';

const TaskForm = ({
  open, data, submit, onClose
}) => {
  const classes = styles();
  const theme = useTheme();
  const text = useIntl();
  const [formData, setFormData] = useState({
    description: data?.description,
    name: data?.name
  });
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useLayoutEffect(() => {
    setFormData(data);
  }, [data]);

  /*
  * TODO-qp::
  *  1) form validator
  * */
  const onSubmit = () => {
    if (formData.name) {
      submit(formData);
    }
  };

  return (
    <Flex
      className={classes.container}
    >
      <Dialog
        open={open}
        fullScreen={fullScreen}
        onClose={() => onClose(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <FormattedMessage id={
            data ? 'forms.modify-task'
              : 'forms.create-new-task'
          }
          />
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={formData?.name}
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
            value={formData?.description}
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
          <Button onClick={() => onClose(false)} color="primary">
            <FormattedMessage id="forms.cancel" />
          </Button>
          <Button onClick={() => onSubmit()} color="primary">
            <FormattedMessage id={
              data ? 'forms.update'
                : 'forms.save'
            }
            />
          </Button>
        </DialogActions>
      </Dialog>
    </Flex>
  );
};

TaskForm.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  submit: PropTypes.func.isRequired
};

TaskForm.defaultProps = {
  data: undefined,
  open: false
};

export default TaskForm;
