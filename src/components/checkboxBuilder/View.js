import React, { useState } from 'react';

import { Checkbox, CheckboxGroup } from 'ice-cube/components';
import ComponentWrapper from '../core/ComponentWrapper';

function View() {
  const [checkbox, setCheckbox] = useState(true);
  const [checkboxGroup, setCheckboxGroup] = useState();
  const items = [
    { value: 1, label: 'item 1' },
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

  return (
    <div className='row'>
      <ComponentWrapper title='Default'>
        <Checkbox value={checkbox} onChange={(r) => setCheckbox(r)}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </Checkbox>
      </ComponentWrapper>

      <ComponentWrapper title='Label Prop'>
        <Checkbox value={checkbox} onChange={(r) => setCheckbox(r)} label='do you agree?' />
      </ComponentWrapper>

      <ComponentWrapper title='Disabled'>
        <Checkbox value={checkbox} onChange={(r) => setCheckbox(r)} label='do you agree?' disabled />
      </ComponentWrapper>

      <ComponentWrapper title='Checkbox Group Default'>
        <CheckboxGroup data={items} value={checkboxGroup} onChange={(r) => setCheckboxGroup([...r])} />
      </ComponentWrapper>

      <ComponentWrapper title='Checkbox Group Horizontal'>
        <CheckboxGroup data={items} value={checkboxGroup} onChange={(r) => setCheckboxGroup([...r])} horizontal />
      </ComponentWrapper>

      <ComponentWrapper title='Checkbox Group Disabled'>
        <CheckboxGroup data={items} value={checkboxGroup} onChange={(r) => setCheckboxGroup([...r])} disabled />
      </ComponentWrapper>
    </div>
  );
}

View.propTypes = {};

export default View;
