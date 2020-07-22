import React from 'react';

function Spinner() {
  return (
    <div className="d-flex justify-content-center my-5 py-5">
      <div
        className="spinner-grow text-danger"
        style={{ width: '6rem', height: '6rem' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
