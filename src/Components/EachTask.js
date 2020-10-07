import React from 'react';
import PropTypes from 'prop-types';

const EachTask = props => {
  return (
    <div className="eachTask">
      <h5>{props.task}</h5>
      <h6 className="time">{props.content}</h6>
    </div>
  );
};

EachTask.propTypes = {

};

export default EachTask;