import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';

import { TasksList } from '#components';
import { actions } from '#store';
import { Flex } from '#widgets';

const App = ({
  getTasks
}) => {
  getTasks();

  return (
    <Flex
      flex={1}
      alignSelf="stretch"
    >
      <Flex
        flex={1}
      >
        <TasksList type="todo" />
      </Flex>
      <Flex
        flex={1}
      >
        <TasksList type="doing" />
      </Flex>
      <Flex
        flex={1}
      >
        <TasksList type="done" />
      </Flex>
    </Flex>
  );
};

const mapDispatchToProps = {
  getTasks: actions.getTaskAction
};

export default connect(null, mapDispatchToProps)(App);
