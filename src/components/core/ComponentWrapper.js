import React from 'react';
import PropTypes from 'prop-types';

function ComponentWrapper(props) {
  const { title, children } = props;

  return (
    <div className='content-wrapper col-12'>
      <h5>{title}</h5>
      {children}
    </div>
  );
}

ComponentWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ComponentWrapper;
