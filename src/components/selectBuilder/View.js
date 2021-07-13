import React, { useState } from 'react';

import { Select } from 'ice-cube/components';
import ComponentWrapper from '../core/ComponentWrapper';

function View() {
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

  const [val, setVal] = useState();

  return (
    <div className='row'>
      <ComponentWrapper title='Default'>
        <Select data={items} value={val} onChange={(r) => setVal(r)} />
      </ComponentWrapper>
    </div>
  );
}

View.propTypes = {};

export default View;
