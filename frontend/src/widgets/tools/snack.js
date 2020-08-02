import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const Snack = ({
  title, mode, open, onClose
}) => {
  const [showSnack, setShowSnack] = useState(open);

  return (
    <Snackbar
      open={showSnack}
      autoHideDuration={6000}
      onClose={() => {
        setShowSnack(false);
        onClose(false);
      }}
    >
      <Alert
        onClose={() => {
          setShowSnack(false);
          onClose(false);
        }}
        severity={mode}
      >
        <FormattedMessage id={title} />
      </Alert>
    </Snackbar>
  );
};

Snack.propTypes = {
  mode: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
};

Snack.defaultProps = {
  onClose: () => null,
  open: false
};

export default Snack;
