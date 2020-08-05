import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useFormatMessage } from 'react-intl-hooks';

import Flex from '../tools/flex';
import styles from './styles';

const CardContainer = ({ children, title }) => {
  const classes = styles();
  const text = useFormatMessage();

  return (
    <Paper
      className={classes.wrapper}
    >
      <Flex
        className={classes.cardTitle}
      >
        <FormattedMessage id={title} />
      </Flex>
      <Flex
        alignSelf="stretch"
      >
        <TextField
          className={classes.inputText}
          label={text({ id: 'global.search' })}
          variant="outlined"
          type="search"
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

export default CardContainer;
