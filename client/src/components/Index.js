import React from 'react';

// Components
import SearchForm from './layouts/SearchForm';
import Games from './games/Games';

// Styles
import Jumbotron from 'react-bootstrap/Jumbotron';

function Index() {
  return (
    <>
      <Jumbotron className="mt-5 container">
        <h1 className="display-4 text-center text-capitalize mb-5">
          <i className="fas fa-gamepad"></i> Search For Any Game
        </h1>
        <SearchForm />
      </Jumbotron>
      <div className="mb-3"></div>
      <Games />
      <div className="mb-3"></div>
    </>
  );
}

export default Index;
