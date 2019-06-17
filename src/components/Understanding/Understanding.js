import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {
    state = {
        understanding: 0,
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
    }
    render () {
        console.log(this.props.reduxState);
        
        return (
            <>
            <h3>DO YOU REALLY UNDERSTAND ANYTHING.</h3>
            <br />
            <br />
            <input placeholder="Do you really understand anything?" onChange={this.handleUnderstanding} value={this.state.understanding}/> 
            `<button onClick={() => { this.props.history.push('/support') }}>Next</button>`
            </>
        )
    }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Understanding);