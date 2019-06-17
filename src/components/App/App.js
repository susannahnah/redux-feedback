import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Comments from '../Comments/Comments.js';
import Feeling from '../Feeling/Feeling.js';
import Header from '../Header/Header.js';
import Review from '../Review/Review.js';
import Support from '../Support/Support.js';
import Understanding from '../Understanding/Understanding.js';


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Route component={Header} path="/" />
            <Route path="/feeling" exact component={Feeling} />
            <Route path="/understanding" exact component={Understanding} />
            <Route path="/support" exact component={Support} />
            <Route path="/comments" exact component={Comments} />
            <br />
            <Review />
          </div>
        </Router>
      </>
    );
  }
}

export default connect()(App);
