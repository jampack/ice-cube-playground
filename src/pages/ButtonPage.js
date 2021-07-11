import React from 'react';
import Build from '../components/buttonBuilder/Build';
import View from '../components/buttonBuilder/View';

function ButtonPage() {
  return (
    <div className='container-body'>
      <div className='left'>
        <Build />
      </div>
      <div className='right'>
        <View />
      </div>
    </div>
  );
}

ButtonPage.propTypes = {};

export default ButtonPage;
