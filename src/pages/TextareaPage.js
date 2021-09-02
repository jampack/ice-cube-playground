import React from 'react';
import Build from '../components/textareaBuilder/Build';
import View from '../components/textareaBuilder/View';

function TextareaPage() {
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

TextareaPage.propTypes = {};

export default TextareaPage;
