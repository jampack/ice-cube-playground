import React from 'react';
import Build from '../components/textFieldBuilder/Build';
import View from '../components/textFieldBuilder/View';

function TextFieldPage() {
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

TextFieldPage.propTypes = {};

export default TextFieldPage;
