import React, { useState } from 'react';

import { TextField } from 'ice-cube/components';
import ComponentWrapper from '../core/ComponentWrapper';

function View() {
  const [value, setValue] = useState('');

  return (
    <div className='row'>
      <ComponentWrapper title='Default'>
        <TextField value={value} onChange={(r) => setValue(r)} label='Label' placeholder='Placeholder' />
      </ComponentWrapper>

      <ComponentWrapper title='Outlined'>
        <TextField value={value} onChange={(r) => setValue(r)} outlined label='Label' placeholder='Placeholder' />
      </ComponentWrapper>

      <ComponentWrapper title='Underlined'>
        <TextField value={value} onChange={(r) => setValue(r)} underlined label='Label' placeholder='Placeholder' />
      </ComponentWrapper>

      <ComponentWrapper title='Filled'>
        <TextField value={value} onChange={(r) => setValue(r)} filled label='Label' placeholder='Placeholder' />
      </ComponentWrapper>

      <ComponentWrapper title='Disabled'>
        <TextField value={value} onChange={(r) => setValue(r)} label='Label' placeholder='Placeholder' disabled />
      </ComponentWrapper>

      <ComponentWrapper title='Block'>
        <TextField value={value} onChange={(r) => setValue(r)} label='Label' placeholder='Placeholder' block />
      </ComponentWrapper>
    </div>
  );
}

View.propTypes = {};

export default View;
