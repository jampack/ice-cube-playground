import React from 'react';
import Build from '../components/radioBuilder/Build';
import View from '../components/radioBuilder/View';

function CheckboxPage() {
  return (
    <div className='container-fluid no-padding'>
      <div className='container-body'>
        <div className='left'>
          <Build />
        </div>
        <div className='right'>
          <View />
        </div>
      </div>
    </div>
  );
}

CheckboxPage.propTypes = {};

export default CheckboxPage;
