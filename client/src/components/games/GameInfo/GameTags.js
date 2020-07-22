import React from 'react';

const GameTags = ({ tags }) => {
  const colors = [
    'badge-primary',
    'badge-success',
    'badge-danger',
    'badge-warning',
    'badge-info',
    'badge-light',
  ];

  return (
    <div className="container">
      {/* <h3 className="font-weight-bold text-center">Tags</h3> */}
      <p className="lead text-center" style={{ lineHeight: '2rem' }}>
        {' '}
        Tags:
        {tags.map((tag) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <span
              style={{ opacity: '0.9' }}
              className={`badge ${randomColor} mx-1`}
              key={tag.id}
            >
              {tag.name}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default GameTags;
