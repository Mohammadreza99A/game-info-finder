import React from 'react';

// Styles
import Badge from 'react-bootstrap/Badge';

function GameGenres({ genres }) {
  const colors = ['success', 'danger', 'warning', 'info'];

  return (
    <div>
      {genres.map((genre) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <Badge key={genre.id} pill variant={randomColor} className="mx-1">
            {genre.name}
          </Badge>
        );
      })}
    </div>
  );
}

export default GameGenres;
