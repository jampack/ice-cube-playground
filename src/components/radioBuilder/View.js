import React, { useState } from 'react';

import { Radio, RadioGroup } from 'ice-cube/components';
import ComponentWrapper from '../core/ComponentWrapper';

function View() {
  const [radio, setRadio] = useState(true);
  const [radioGroup, setRadioGroup] = useState();
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
        <Radio value={radio} onChange={(r) => setRadio(r)}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </Radio>
      </ComponentWrapper>

      <ComponentWrapper title='Label Prop'>
        <Radio label='Yolo' value={radio} onChange={(r) => setRadio(r)} />
      </ComponentWrapper>

      <ComponentWrapper title='Disabled'>
        <Radio label='Yolo' value={radio} onChange={(r) => setRadio(r)} disabled />
      </ComponentWrapper>

      <ComponentWrapper title='Radio Group Default'>
        <RadioGroup data={items} value={radioGroup} onChange={(r) => setRadioGroup(r)} />
      </ComponentWrapper>

      <ComponentWrapper title='Radio Group Horizontal'>
        <RadioGroup data={items} value={radioGroup} onChange={(r) => setRadioGroup(r)} horizontal />
      </ComponentWrapper>

      <ComponentWrapper title='Radio Group Disabled'>
        <RadioGroup data={items} value={radioGroup} onChange={(r) => setRadioGroup(r)} disabled />
      </ComponentWrapper>
    </div>
  );
}

View.propTypes = {};

export default View;
