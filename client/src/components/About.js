import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div className="container jumbotron mt-5 mb-5">
      <Helmet>
        <title>Game Info Finder | About</title>
      </Helmet>
      <h1 className="text-center display-4 mb-5">About Page</h1>
      <p className="lead text-justify">
        An Application for finding all sorts of information regarding games.
        This application uses <a href="https://api.rawg.io/docs/">RAWG API</a>{' '}
        in order to get the information for any given title.
      </p>
      <p className="text-justify">
        Developper: <span className="lead">Mohammadreza Amini</span>
        <br />
        Email: <span className="lead">mohammadreza99a@yahoo.com</span>
      </p>
      <div className="text-center">
        <a
          href="https://www.facebook.com/mohammadreza.amini.33"
          rel="noopener noreferrer"
          target="_blank"
          className="fb-ic mx-2"
          style={{ fontSize: '2.5rem' }}
        >
          <i className="fab fa-facebook-f fa-lg"> </i>
        </a>
        <a
          href="https://www.instagram.com/mohammadreza99a/"
          rel="noopener noreferrer"
          target="_blank"
          className="ins-ic mx-2"
          style={{ fontSize: '2.5rem' }}
        >
          <i className="fab fa-instagram fa-lg"> </i>
        </a>
        <a
          href="https://github.com/Mohammadreza99A"
          target="_blank"
          rel="noopener noreferrer"
          className="github-ic mx-2"
          style={{ fontSize: '2.5rem' }}
        >
          <i className="fab fa-github fa-lg"> </i>
        </a>
        <hr />
        <Link to="/" className="btn btn-info">
          <i className="fas fa-home"></i> Go Home
        </Link>
      </div>
    </div>
  );
}

export default About;
