import { makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const FormControllerStyle = makeStyles((theme) => ({
  inputs: {
    margin: '15px 0'
  },
  submitBtn: {
    margin: '30px 0'
  }
}), {
  name: 'widgets-form-controller-'
});

const FormController = ({
  name, label, helper, children
}) => {
  const classes = FormControllerStyle();
  return (
    <FormControl
      fullWidth
      className={classes.inputs}
    >
      {label && (
        <InputLabel htmlFor={name}>
          <FormattedMessage id={label} />
        </InputLabel>
      )}
      {children}
      {
        helper && (
          <FormHelperText id={name}>
            <FormattedMessage id={helper} />
          </FormHelperText>
        )
      }
    </FormControl>
  );
};

FormController.propTypes = {
  children: PropTypes.node.isRequired,
  helper: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
};
FormController.defaultProps = {
  helper: null,
  label: null
};

export default FormController;
