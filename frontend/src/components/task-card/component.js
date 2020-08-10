import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { get12Time, standardDate } from '../tools/date';
import Flex from '../tools/flex';
import styles from './style';

const TaskCard = ({
  data, onTaskView, submitAction
}) => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const actionsMap = [
    {
      action: () => submitAction('todo', data),
      state: 'todo'
    }, {
      action: () => submitAction('doing', data),
      state: 'doing'
    }, {
      action: () => submitAction('done', data),
      state: 'done'
    }, {
      action: () => submitAction('edit', data),
      state: 'edit'
    }, {
      action: () => submitAction('remove', data),
      state: 'remove'
    }
  ];

  return (
    <Flex
      alignSelf="stretch"
      justifyContent="space-between"
      className={
        clsx(
          classes.container,
          data.status
        )
      }
    >
      <Flex
        flexDirection="column"
        className={classes.content}
        flex={1}
        onClick={onTaskView}
      >
        <p className={classes.title}>
          {data.name}
        </p>
        <p className={classes.date}>
          {standardDate(data.updatedAt)}{' | '}
          {get12Time(data.updatedAt)}
        </p>
      </Flex>
      <Flex>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MoreVertSharpIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {
            actionsMap.map((menuItem) => {
              if (data.status === menuItem.state) {
                return null;
              }
              return (
                <MenuItem
                  key={`actionsMap__${menuItem.state}`}
                  onClick={() => {
                    handleClose();
                    menuItem.action();
                  }}
                >
                  <FormattedMessage id={`global.task-card-action.${menuItem.state}`} />
                </MenuItem>
              );
            })
          }
        </Menu>
      </Flex>

    </Flex>
  );
};

TaskCard.propTypes = {
  data: PropTypes.func.isRequired,
  onTaskView: PropTypes.func.isRequired,
  submitAction: PropTypes.func.isRequired,
};

TaskCard.defaultProps = {
};

export default TaskCard;
