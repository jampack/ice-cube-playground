import React from 'react';
import PropTypes from 'prop-types';

function Break(props) {
  const { margin } = props;

  return <br style={{ marginBottom: `${margin}px` }} />;
}

Break.propTypes = {
  margin: PropTypes.string,
};

Break.defaultProps = {
  margin: '10',
};

export default Break;
