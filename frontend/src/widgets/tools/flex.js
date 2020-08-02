import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import { flexStyle } from '#styles';

const Flex = ({
  children, className, onClick, title, ...styles
}) => {
  let xs = {};
  let sm = {};
  let md = {};
  let lg = {};

  const styleKeys = Object.keys(styles);
  if (styleKeys.length > 0) {
    // eslint-disable-next-line array-callback-return
    Object.keys(styles).map((item) => {
      if (item.includes('-')) {
        if (item.includes('-sm')) {
          sm = {
            ...sm,
            [item.split('-sm')[0]]: styles[item]
          };
        } else if (item.includes('-md')) {
          md = {
            ...md,
            [item.split('-md')[0]]: styles[item]
          };
        } else {
          lg = {
            ...lg,
            [item.split('-lg')[0]]: styles[item]
          };
        }
      } else {
        xs = {
          ...xs,
          [item.split('-')[0]]: styles[item]
        };
      }
    });
  }

  const stylesToClass = makeStyles((theme) => ({
    flex: {
      ...flexStyle(),
      ...xs,
      [theme.breakpoints.between('sm', 'md')]: {
        ...sm,
        ...md
      },
      [theme.breakpoints.up('lg')]: {
        ...sm,
        ...md,
        ...lg
      }
    }
  }),
  { name: 'widgets-' });

  const classes = stylesToClass();

  if (!children) {
    return null;
  }

  return (
    <div
      onClick={onClick}
      title={title}
      className={clsx(classes.flex, className)}
    >
      {children}
    </div>
  );
};


Flex.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.object,
    PropTypes.string
  ]),
  onClick: PropTypes.func,
  title: PropTypes.string
};

Flex.defaultProps = {
  children: null,
  className: null,
  onClick: () => null,
  title: null
};


export default Flex;
