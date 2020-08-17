import React from 'react';

function GameDevelopers({ developers }) {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-success btn-block dropdown-toggle"
          type="button"
          id="developersDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          Developers
        </button>
        <div
          className="dropdown-menu dropdown-menu-lg"
          aria-labelledby="developersDropdown"
          style={{ width: '100%' }}
        >
          <ul className="list-group text-center">
            {developers.map((developper) => {
              return (
                <li
                  key={developper.id}
                  className="dropdown-item"
                  onMouseOver={(e) =>
                    (e.target.style.background = 'transparent')
                  }
                >
                  {developper.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GameDevelopers;
