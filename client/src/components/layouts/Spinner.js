import React from 'react';

// Styles
import { Spinner as SpinnerStyle } from 'react-bootstrap';

function Spinner() {
  return (
    <div className="d-flex justify-content-center my-5 py-5">
      <SpinnerStyle
        animation="grow"
        variant="danger"
        style={{ width: '6rem', height: '6rem' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </SpinnerStyle>
    </div>
  );
}

export default Spinner;
