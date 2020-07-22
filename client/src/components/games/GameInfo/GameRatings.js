import React from 'react';

const GameRatings = ({ ratings }) => {
  const colors = ['bg-success', 'bg-danger', 'bg-warning', 'bg-info'];

  return (
    <div className="my-1 text-center">
      <h3 className="font-weight-bold">Ratings</h3>
      {ratings.map((rating) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <div key={rating.id} className="container text-left">
            <div className="row lead">
              <div className="col-sm-2">
                <span className="text-capitalize">{rating.title}</span>
              </div>
              <div className="col-sm-10">
                <div className="progress my-2">
                  <div
                    key={rating.id}
                    style={{ width: `${rating.percent}%` }}
                    className={`progress-bar ${randomColor}`}
                    role="progressbar"
                    aria-valuenow={rating.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>{rating.count}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameRatings;
