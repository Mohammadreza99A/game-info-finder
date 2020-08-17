import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import store from './globalState/store';

// Components
import Index from './components/Index';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import About from './components/About';
import NotFoundPage from './components/NotFoundPage';
import GameInfo from './components/games/GameInfo/index';
import SearchResults from './components/games/SearchResults';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Helmet>
          <title>Game Info Finder | Home</title>
        </Helmet>
        <>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/about" component={About} />
            <Route exact path="/info/game/:id" component={GameInfo} />
            <Route exact path="/search" component={SearchResults} />
            <Route path="*" component={NotFoundPage} />
          </Switch>

          <Footer />
        </>
      </Router>
    </Provider>
  );
}

export default App;
