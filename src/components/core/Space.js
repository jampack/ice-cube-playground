import React from 'react';
import PropTypes from 'prop-types';

function Space(props) {
  const { margin } = props;
  return <span style={{ margin: `${margin}px` }} />;
}

Space.propTypes = {
  margin: PropTypes.string,
};

Space.defaultProps = {
  margin: '5',
};

export default Space;
