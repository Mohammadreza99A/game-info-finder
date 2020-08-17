import React from 'react';

// Syles
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function GameStores({ stores }) {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          block
          type="button"
          id="storesDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          Stores
        </Dropdown.Toggle>
        <div
          className="dropdown-menu dropdown-menu-lg"
          aria-labelledby="storesDropdown"
          style={{ width: '100%' }}
        >
          <ListGroup className="text-center">
            {stores.map((store) => {
              return (
                <ListGroup.Item
                  key={store.id}
                  className="dropdown-item"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <Button
                    block
                    href={store.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn-info"
                  >
                    {store.store.name}
                  </Button>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </Dropdown>
    </>
  );
}

export default GameStores;
