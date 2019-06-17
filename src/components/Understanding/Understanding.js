import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {
    state = {
        understanding: '',
    }

    handleUnderstanding = (event) => {
        this.setState({
            ...this.state, 
            understanding: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state });
        this.props.history.push('/support');
        console.log(this.props.reduxState);

    }
    render () {
        
        return (
            <>
            <h3>DO YOU REALLY UNDERSTAND ANYTHING.</h3>
            <input placeholder="rate 1 - 5" onChange={this.handleUnderstanding} value={this.state.understanding}/> 
            <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Understanding);