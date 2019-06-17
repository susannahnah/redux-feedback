import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feeling extends Component {
    state = {
        feeling: 0,
    }

    handleFeeling = (event) => {
        this.setState({
            ...this.state, 
            feeling: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEELING', payload: this.state });
        this.props.history.push('/understanding');
    }

    

    render () {
        return (
            <>
            <h3>HOW ARE YOU FEELING.</h3>
            <br />
            <br />
            <input placeholder="How Are You Feeling Today?" onChange={this.handleFeeling} value={this.state.feeling}/> 
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