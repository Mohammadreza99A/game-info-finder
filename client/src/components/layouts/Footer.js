import React from 'react';

// Styles
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <>
      <footer className="navbar-dark bg-danger pb-1">
        <Container className="text-center">
          <Row>
            <Col md={12} className="pt-4">
              <div className="flex-center">
                <a
                  href="https://www.facebook.com/mohammadreza.amini.33"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="fb-ic lead text-primary"
                >
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
                <a
                  href="https://www.instagram.com/mohammadreza99a/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="ins-ic lead text-primary"
                >
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
                <a
                  href="https://github.com/Mohammadreza99A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-ic lead text-primary"
                >
                  <i className="fab fa-github fa-lg white-text fa-2x"> </i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        <p className="text-center py-3">
          © 2020 Copyright : <span className="lead">Mohammadreza Amini</span>
        </p>
      </footer>
    </>
  );
}

export default Footer;
