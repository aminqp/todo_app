import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const style = makeStyles((theme) => ({
  container: theme.app.container
}),
{ name: 'widgets-' });

const Container = ({ children, className }) => {
  try {
    const classes = style();

    if (!children) {
      return null;
    }

    return (
      <div className={clsx(classes.container, className)}>
        {children}
      </div>
    );
  } catch (e) {
    console.log(' Container => e -> ', e);
    return null;
  }
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
};

Container.defaultProps = {
  children: null,
  className: null
};

export default Container;
