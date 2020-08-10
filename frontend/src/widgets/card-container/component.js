import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Flex from '../tools/flex';
import styles from './styles';

/** @namespace tasksList.totalDocs */

const CardContainer = ({
  children, title, onSearch, onFocus, tasksList, actions
}) => {
  const classes = styles();
  const text = useIntl();

  return (
    <Paper
      className={classes.wrapper}
    >
      <Flex
        className={classes.cardTitle}
      >
        <Flex flex={1}>
          <FormattedMessage id={title} /> | {tasksList.totalDocs}
        </Flex>
        <Flex>
          {actions}
        </Flex>

      </Flex>
      <Flex
        alignSelf="stretch"
      >
        <TextField
          className={classes.inputText}
          label={text.formatMessage({ id: 'global.search' })}
          variant="outlined"
          type="search"
          onFocus={onFocus}
          onChange={(e) => onSearch(e.target.value)}
        />
      </Flex>
      <Flex
        className={classes.body}
        alignSelf="stretch"
        flexDirection="column"
      >
        {children}
      </Flex>

    </Paper>
  );
};

CardContainer.propTypes = {
  actions: PropTypes.node,
  children: PropTypes.node.isRequired,
  onFocus: PropTypes.func,
  onSearch: PropTypes.func,
  tasksList: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

CardContainer.defaultProps = {
  actions: null,
  onFocus: () => null,
  onSearch: () => null
};

export default CardContainer;
