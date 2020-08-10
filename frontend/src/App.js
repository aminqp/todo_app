import { useMediaQuery, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Element, Link } from 'react-scroll';

import { actions } from '#store';
import { Flex } from '#widgets';

import { CreateTask, TasksList, TopNav } from './components';

const App = ({
  getTasks
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  getTasks();

  return (
    <Flex
      flex={1}
      alignSelf="stretch"
      flexDirection="column"
      flexDirection-md="row"
      {...mobile ? { paddingTop: '50px' } : {}}
    >
      {mobile && <TopNav />}
      <Element
        style={{
          alignSelf: 'stretch',
          flex: 1
        }}
        name="#todo"
      >
        <Flex
          flex={1}
          alignSelf="stretch"
        >
          <TasksList
            type="todo"
            actions={(
              <CreateTask />
            )}
          />
        </Flex>
      </Element>
      <Element
        style={{
          alignSelf: 'stretch',
          flex: 1
        }}
        name="#doing"
      >
        <Flex
          flex={1}
          alignSelf="stretch"
        >
          <TasksList type="doing" />
        </Flex>
      </Element>
      <Element
        style={{
          alignSelf: 'stretch',
          flex: 1
        }}
        name="#done"
      >
        <Flex
          flex={1}
          alignSelf="stretch"
        >
          <TasksList type="done" />
        </Flex>
      </Element>
    </Flex>
  );
};

App.propTypes = {
  getTasks: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  getTasks: actions.getTaskAction
};

export default connect(null, mapDispatchToProps)(App);
