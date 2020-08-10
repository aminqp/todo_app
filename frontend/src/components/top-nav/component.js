import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import { Flex, get12Time, standardDate } from '#widgets';

import styles from './style';

const ViewTask = ({
  open, data, onClose, onOpen
}) => {
  const classes = styles();

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}

    >
      <Flex
        flexDirection="column"
        className={
          clsx(
            classes.container,
            data?.status
          )
        }
      >
        <Flex
          className={classes.name}
        >
          {data?.name}
        </Flex>
        <Flex
          className={classes.description}
        >
          {data?.description}
        </Flex>
        <Flex
          className={classes.date}
        >
          {standardDate(data?.updatedAt)}{' | '}
          {get12Time(data?.updatedAt)}
        </Flex>
      </Flex>
    </SwipeableDrawer>
  );
};

ViewTask.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  open: PropTypes.bool
};

ViewTask.defaultProps = {
  data: undefined,
  open: false
};

export default ViewTask;
