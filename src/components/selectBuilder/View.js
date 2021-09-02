import React, { useState } from 'react';

import { Select } from 'ice-cube/components';
import ComponentWrapper from '../core/ComponentWrapper';

function View() {
  const items = [
    { value: 1, label: 'In publishing and graphic design Lorem ipsum is a placeholder text commonly' },
    { value: 2, label: 'item 2' },
    { value: 3, label: 'item 3' },
    { value: 4, label: 'item 4' },
    { value: 5, label: 'item 5' },
    { value: 6, label: 'item 6' },
    { value: 7, label: 'item 7' },
    { value: 8, label: 'item 8' },
    { value: 9, label: 'item 9' },
    { value: 10, label: 'item 10' },
  ];

  const [val, setVal] = useState();

  return (
    <div className='row'>
      <ComponentWrapper title='Default'>
        <Select
          data={items}
          value={val}
          onChange={(r) => setVal(r)}
          label='Label'
          placeholder='Placeholder Placeholder Placeholder'
        />
      </ComponentWrapper>

      <ComponentWrapper title='Outlined'>
        <Select data={items} value={val} onChange={(r) => setVal(r)} label='Label' placeholder='Placeholder' outlined />
      </ComponentWrapper>

      <ComponentWrapper title='Underlined'>
        <Select
          data={items}
          value={val}
          onChange={(r) => setVal(r)}
          label='Label'
          placeholder='Placeholder'
          underlined
        />
      </ComponentWrapper>

      <ComponentWrapper title='Filled'>
        <Select data={items} value={val} onChange={(r) => setVal(r)} label='Label' placeholder='Placeholder' filled />
      </ComponentWrapper>

      <ComponentWrapper title='Disabled'>
        <Select data={items} value={val} onChange={(r) => setVal(r)} label='Label' placeholder='Placeholder' disabled />
      </ComponentWrapper>

      <ComponentWrapper title='Block'>
        <Select data={items} value={val} onChange={(r) => setVal(r)} label='Label' placeholder='Placeholder' block />
      </ComponentWrapper>

      <ComponentWrapper title='Help Text'>
        <Select
          data={items}
          value={val}
          onChange={(r) => setVal(r)}
          label='Label'
          placeholder='Placeholder'
          helpText='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
        />
      </ComponentWrapper>

      <ComponentWrapper title='Error'>
        <Select
          data={items}
          value={val}
          onChange={(r) => setVal(r)}
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
