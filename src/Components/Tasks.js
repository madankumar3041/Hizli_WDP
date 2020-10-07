import React from 'react';
import PropTypes from 'prop-types';
import EachTask from './EachTask';

const Tasks = props => {
  const tasksList = [{
    task: "Call Adam to review the theme document",
    content: "Scheduled for October 24, 2020"
  }, {
    task: "Call Adam to review the theme document",
    content: "Scheduled for Monday 24, 2020"
  }, {
    task: "Call Adam to review the theme document",
    content: "Scheduled for Monday 24, 2020"
  },
  {
    task: "Call Adam to review the theme document",
    content: "Scheduled for Monday 24, 2020"
  }];
  return (
    <div className="taskHolder">
      <h4>{props.title}</h4>
      <div className="tasksList">
        {tasksList.map(item => <EachTask task={item.task} content={item.content}/>)}
      </div>
    </div>
  );
};

Tasks.propTypes = {

};

export default Tasks;