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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <Route component={Header} path="/" />
          <Route path="/feeling" exact component={Feeling} />
          <Route path="/understanding" exact component={Understanding} />
          <Route path="/support" exact component={Support} />
          <Route path="/comments" exact component={Comments} />
          <Route path="/review" exact component={Review} />

        </header>
        <br/>
      </div>
    );
  }
}

export default connect ()(App);
