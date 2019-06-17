import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {

    render () {
        return (
            <>
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
            </>
        )
    }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Header);