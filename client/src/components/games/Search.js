import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '../../globalState/actions/gameActions';

function Search() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.search);
  const [userInput, setUserInput] = useState('');

  /**
   * So that the input clears out when pressing on Esc key
   */
  const handleKeyPress = useCallback((event) => {
    if (event.keyCode === 27) {
      setUserInput('');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false);
    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    };
  }, [userInput, handleKeyPress]);

  const findGame = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(userInput));
    setUserInput(''); // reset the form input to blank
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
    dispatch(fetchSearch(e.target.value));
  };

  return (
    <div className="jumbotron container mt-5">
      <h1 className="display-4 text-center text-capitalize mb-5">
        <i className="fas fa-gamepad"></i> Search For Any Game
      </h1>
      <form onSubmit={findGame}>
        <div className="d-flex input-group">
          <input
            type="text"
            className="form-control border border-warning"
            placeholder="Search..."
            name="userInput"
            value={userInput}
            onChange={onChange}
            style={{ backgroundColor: '#444', color: '#fff' }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-warning"
              type="submit"
              value="Submit"
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group">
          <div
            className={`dropdown-menu w-100 text-center lead ${
              userInput ? 'show' : ''
            }`}
            style={{ maxHeight: '200px', overflowY: 'auto' }}
          >
            {games.map((game) => {
              return (
                <Link
                  to={`/info/game/${game.id}`}
                  key={game.id}
                  className="dropdown-item"
                >
                  {game.name}
                </Link>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
