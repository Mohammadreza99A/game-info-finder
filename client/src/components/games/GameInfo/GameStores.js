import React from 'react';

function GameStores({ stores }) {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-success btn-block dropdown-toggle"
          type="button"
          id="storesDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          Stores
        </button>
        <div
          className="dropdown-menu dropdown-menu-lg"
          aria-labelledby="storesDropdown"
          style={{ width: '100%' }}
        >
          <ul className="list-group text-center">
            {stores.map((store) => {
              return (
                <li
                  key={store.id}
                  className="dropdown-item"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <a
                    href={store.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn btn-info btn-block"
                  >
                    {store.store.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GameStores;
