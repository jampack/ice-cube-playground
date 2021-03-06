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

      <ComponentWrapper title='Help Text'>
        <TextField
          value={value}
          onChange={(r) => setValue(r)}
          label='Label'
          placeholder='Placeholder'
          helpText='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
        />
      </ComponentWrapper>

      <ComponentWrapper title='Error'>
        <TextField
          value={value}
          onChange={(r) => setValue(r)}
          label='Label'
          placeholder='Placeholder'
          error='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
        />
      </ComponentWrapper>
    </div>
  );
}

View.propTypes = {};

export default View;
