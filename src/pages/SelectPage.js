import React from 'react';
import Build from '../components/selectBuilder/Build';
import View from '../components/selectBuilder/View';

function SelectPage() {
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

SelectPage.propTypes = {};

export default SelectPage;
