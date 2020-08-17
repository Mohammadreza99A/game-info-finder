import React, { useState } from 'react';
import parse from 'html-react-parser';

// Styles
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const GamePlatform = ({ platform }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="my-2 text-center">
      <Card border="warning">
        <Card.Body className="p-2">
          <Card.Title as="h4" className="text-weight-bold">
            {platform.platform.name}
          </Card.Title>
          {platform.requirements && (
            <>
              <Button className="btn-danger" onClick={handleShow}>
                See Requirements
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title as="h5">Requirements</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-left">
                  {platform.requirements.minimum && (
                    <div className="mb-2">
                      {parse(platform.requirements.minimum)}
                    </div>
                  )}
                  <hr />
                  {platform.requirements.recommended && (
                    <div className="mb-2">
                      {/* <h5 className="lead">Recommended</h5> */}
                      {parse(platform.requirements.recommended)}
                    </div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}
        </Card.Body>
        <Card.Footer className="text-muted py-1">
          Released at: {platform.released_at}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default GamePlatform;
