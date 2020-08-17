import React from 'react';

// Styles
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';

function GameDevelopers({ developers }) {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          block
          type="button"
          id="developersDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          Developers
        </Dropdown.Toggle>
        <div
          className="dropdown-menu dropdown-menu-lg"
          aria-labelledby="developersDropdown"
          style={{ width: '100%' }}
        >
          <ListGroup className="text-center">
            {developers.map((developper) => {
              return (
                <ListGroup.Item
                  key={developper.id}
                  className="dropdown-item"
                  onMouseOver={(e) =>
                    (e.target.style.background = 'transparent')
                  }
                  onMouseLeave={(e) => (e.target.style.background = '')}
                >
                  {developper.name}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </Dropdown>
    </>
  );
}

export default GameDevelopers;
