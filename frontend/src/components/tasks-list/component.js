import React, { useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import { CardContainer, TaskCard, useFetch } from '#widgets';

const TasksList = ({ type, tasks }) => (
  <CardContainer
    title={`global.${type}`}
  >
    {
      tasks[type].docs && tasks[type].docs.map((item) => (
        <TaskCard
          key={`${item.status}--${item.createdAt}`}
          data={item}
        />
      ))
    }

  </CardContainer>
);

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(TasksList);
