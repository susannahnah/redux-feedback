import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';


class Header extends Component {

    render () {
        return (
            <>
            <h1 className='header'>Feedback!</h1>
            </>
        )
    }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Header);