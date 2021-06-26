import React, { useState } from 'react';

import { Checkbox, CheckboxGroup } from 'ice-cube/components';
import ComponentWrapper from '../core/ComponentWrapper';

function View() {
  const [checkbox, setCheckbox] = useState(true);
  const [checkboxGroup, setCheckboxGroup] = useState();
  const items = [
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
    { id: 4, name: 'item 4' },
    { id: 5, name: 'item 5' },
    { id: 6, name: 'item 6' },
    { id: 7, name: 'item 7' },
    { id: 8, name: 'item 8' },
    { id: 9, name: 'item 9' },
    { id: 10, name: 'item 10' },
  ];

  return (
    <div className='row'>
      <ComponentWrapper title='Default'>
        <Checkbox value={checkbox} onChange={(r) => setCheckbox(r)}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </Checkbox>
      </ComponentWrapper>

      <ComponentWrapper title='Checkbox Group Default'>
        <CheckboxGroup data={items} value={checkboxGroup} onChange={(r) => setCheckboxGroup([...r])} />
      </ComponentWrapper>

      <ComponentWrapper title='Checkbox Group Horizontal'>
        <CheckboxGroup data={items} value={checkboxGroup} onChange={(r) => setCheckboxGroup([...r])} horizontal />
      </ComponentWrapper>
    </div>
  );
}

View.propTypes = {};

export default View;
