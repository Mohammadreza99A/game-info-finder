import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '../../globalState/actions/gameActions';

// Styles
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {
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
    <Form onSubmit={findGame}>
      <Form.Group>
        <InputGroup className="d-flex">
          <Form.Control
            type="text"
            className="border border-warning"
            placeholder="Search..."
            name="userInput"
            value={userInput}
            onChange={onChange}
            style={{ backgroundColor: '#444', color: '#fff' }}
          />
          <InputGroup.Append>
            <Button variant="outline-warning" type="submit" value="Submit">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup>
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
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
