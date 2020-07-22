import React from 'react';

function GameDevelopers({ developers }) {
  return (
    <div>
      <button
        className="btn btn-success btn-block"
        type="button"
        data-toggle="collapse"
        data-target="#developpersCollapse"
        aria-expanded="false"
        aria-controls="developpersCollapse"
      >
        Developpers
      </button>

      <div className="collapse" id="developpersCollapse">
        <ul className="list-group text-center border border-danger">
          {developers.map((developper) => {
            return (
              <li key={developper.id} className="list-group-item">
                {developper.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default GameDevelopers;
