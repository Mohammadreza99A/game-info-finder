import React from 'react';

// Styles
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

const GameTags = ({ tags }) => {
  const colors = ['primary', 'success', 'danger', 'warning', 'info', 'light'];

  return (
    <Container>
      <p className="lead text-center" style={{ lineHeight: '2rem' }}>
        Tags:
        {tags.map((tag) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <Badge
              pill
              variant={randomColor}
              className="mx-1"
              style={{ opacity: '0.9' }}
              key={tag.id}
            >
              {tag.name}
            </Badge>
          );
        })}
      </p>
    </Container>
  );
};

export default GameTags;
