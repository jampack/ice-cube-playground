import React from 'react';

import { Button } from 'ice-cube/components';
import ComponentWrapper from '../core/ComponentWrapper';
import Space from '../core/Space';

function View() {
  return (
    <div className='row'>
      <ComponentWrapper title='Variants '>
        <Button>Default</Button>
        <Space />
        <Button variant='primary'>Primary</Button>
        <Space />
        <Button variant='secondary'>Secondary</Button>
        <Space />
        <Button variant='success'>Success</Button>
        <Space />
        <Button variant='error'>Error</Button>
        <Space />
        <Button variant='warning'>Warning</Button>
        <Space />
        <Button variant='info'>Info</Button>
      </ComponentWrapper>

      <ComponentWrapper title='Sizes'>
        <Button size='xs'>Extra Small</Button>
        <Space />
        <Button size='sm'>Small</Button>
        <Space />
        <Button>Default</Button>
        <Space />
        <Button size='lg'>Large</Button>
        <Space />
        <Button size='xl'>Extra Large</Button>
        <Space />
      </ComponentWrapper>

      <ComponentWrapper title='Raised'>
        <Button raised>Raised</Button>
      </ComponentWrapper>

      <ComponentWrapper title='Flat'>
        <Button flat>Flat</Button>
      </ComponentWrapper>

      <ComponentWrapper title='Icon'>
        <Button icon>
          <i className='fas fa-cog' />
        </Button>
      </ComponentWrapper>

      <ComponentWrapper title='Icon Fab'>
        <Button icon fab>
          <i className='fas fa-cog' />
        </Button>
      </ComponentWrapper>

      <ComponentWrapper title='Bordered'>
        <Button bordered>Bordered</Button>
      </ComponentWrapper>

      <ComponentWrapper title='Colored'>
        <Button color='lightBlue'>Color Light Blue</Button>
        <Space />
        <Button color='pink'>Color Pink</Button>
      </ComponentWrapper>

      <ComponentWrapper title='Prepend Slot'>
        <Button>
          <Button.Prepend>
            <span style={{ paddingLeft: '15px' }}>Prepended Span</span>
          </Button.Prepend>
          Button text
        </Button>
        <Space />
        <Button>
          <Button.Prepend>
            <i className='fas fa-cube' style={{ paddingLeft: '15px' }} />
          </Button.Prepend>
          Button text
        </Button>
      </ComponentWrapper>

      <ComponentWrapper title='Append Slot'>
        <Button>
          Button text
          <Button.Append>
            <span style={{ paddingRight: '15px' }}>Appended Span</span>
          </Button.Append>
        </Button>
        <Space />
        <Button>
          Button text
          <Button.Append>
            <i className='fas fa-cube' style={{ paddingRight: '15px' }} />
          </Button.Append>
        </Button>
      </ComponentWrapper>

      <ComponentWrapper title='Prepend Prop'>
        <Button prepend={<i className='fas fa-cube' style={{ paddingLeft: '15px' }} />}>Button text</Button>
      </ComponentWrapper>

      <ComponentWrapper title='Append Prop'>
        <Button append={<i className='fas fa-cube' style={{ paddingRight: '15px' }} />}>Button text</Button>
      </ComponentWrapper>

      <ComponentWrapper title='Prepend Icon'>
        <Button prependIcon='fas fa-cube'>Button text</Button>
      </ComponentWrapper>

      <ComponentWrapper title='Append Icon'>
        <Button appendIcon='fas fa-cube'>Button text</Button>
      </ComponentWrapper>

      <ComponentWrapper title='Disabled'>
        <Button disabled>Button text</Button>
      </ComponentWrapper>

      <ComponentWrapper title='Loading'>
        <Button loading>Button text</Button>
      </ComponentWrapper>

      <ComponentWrapper title='Custom Loading Spinner'>
        <Button loading loadingSpinner={<span className='fas fa-atom fa-spin fa-2x' />}>
          Button text
        </Button>
      </ComponentWrapper>
    </div>
  );
}

View.propTypes = {};

export default View;
