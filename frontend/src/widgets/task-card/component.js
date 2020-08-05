import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { get12Time, standardDate } from '../tools/date';
import Flex from '../tools/flex';
import styles from './style';

/*
* createdAt: "2020-07-30T11:47:16.437Z"
 description: "task 1 description"
 name: "task 1 name"
 order: "100"
 status: "todo"
 updatedAt: "2020-07-30T11:47:16.437Z"
 * */

const TaskCard = ({ data, viewTask }) => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const actionsMap = [
    {
      action: () => null,
      state: 'todo'
    }, {
      action: () => null,
      state: 'doing'
    }, {
      action: () => null,
      state: 'done'
    }, {
      action: () => null,
      state: 'edit'
    }, {
      action: () => null,
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
        onClick={() => viewTask()}
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
  viewTask: PropTypes.func
};

TaskCard.defaultProps = {
  viewTask: () => null
};

export default TaskCard;
