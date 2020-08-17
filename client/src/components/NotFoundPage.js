import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Styles
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function NotFoundPage() {
  return (
    <Container className="vh-100">
      <Helmet>
        <title>Game Info Finder | Page Not Found</title>
      </Helmet>
      <h1 className="display-1 text-center">404</h1>
      <Container className="text-center">
        <p className="lead">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
        </p>
        <p className="text-center">
          <Button variant="info" className="mb-5 text-center" as={Link} to="/">
            <i className="fas fa-home"></i> Go Home
          </Button>
        </p>
      </Container>
    </Container>
  );
}

export default NotFoundPage;
