import React from 'react';

function GameStores({ stores }) {
  return (
    <div>
      <button
        className="btn btn-success btn-block"
        type="button"
        data-toggle="collapse"
        data-target="#genresCollapse"
        aria-expanded="false"
        aria-controls="genresCollapse"
      >
        Stores
      </button>

      <div className="collapse" id="genresCollapse">
        <ul className="list-group text-center border border-danger">
          {stores.map((store) => {
            return (
              <li key={store.id} className="list-group-item">
                <a
                  href={store.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn btn-outline-warning btn-block"
                >
                  {store.store.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default GameStores;
