import React from 'react';

function GameGenres({ genres }) {
  const colors = [
    'badge-success',
    'badge-danger',
    'badge-warning',
    'badge-info',
  ];

  return (
    <div>
      {genres.map((genre) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <span
            className={`badge badge-pill ${randomColor} mx-1`}
            key={genre.id}
          >
            {genre.name}
          </span>
        );
      })}
    </div>
  );
}

export default GameGenres;
