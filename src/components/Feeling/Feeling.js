import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Feeling.css'; 


class Feeling extends Component {
    state = {
        feeling: '',
    }

    handleFeeling = (event) => {
        this.setState({
            ...this.state, 
            feeling: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state });
        this.props.history.push('/understanding');
    }

    render () {
        return (
            <>
            <h3>HOW ARE YOU FEELING.</h3>
            <input placeholder="rate 1 - 5" onChange={this.handleFeeling} value={this.state.feeling}/> 
            <br />
            <br />
            <button onClick={this.handleClick}>Next</button>

            </>
        )
    }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Feeling);