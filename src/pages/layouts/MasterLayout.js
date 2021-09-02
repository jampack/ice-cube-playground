import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'ice-cube/components';
import { toggleMode } from '../../store/themeSlice';

const withMasterLayout = (WrappedComponent) => (props) => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  return (
    <div className='container-fluid no-padding'>
      <div className='row no-padding'>
        <div className='col-12'>
          <Button
            onClick={() => dispatch(toggleMode())}
            type='button'
            prependIcon={mode === 'light' ? 'fas fa-moon' : 'fas fa-sun'}>
            <span style={{ color: mode === 'light' ? 'lightblue' : 'orange' }} />
            {mode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </div>
      </div>
      <hr />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <WrappedComponent {...props} />
    </div>
  );
};

export default withMasterLayout;
