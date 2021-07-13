import React from 'react';
import { Link } from 'react-router-dom';

function AllComponentsPage() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <Link to='/button' target='_blank'>
            Button
          </Link>
          <br />
          <Link to='/checkbox' target='_blank'>
            Checkbox
          </Link>
          <br />
          <Link to='/radio' target='_blank'>
            Radio
          </Link>
          <br />
          <Link to='/text-field' target='_blank'>
            TextField
          </Link>
          <br />
          <Link to='/select' target='_blank'>
            Select
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllComponentsPage;
