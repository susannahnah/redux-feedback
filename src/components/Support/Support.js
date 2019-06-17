import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

    state = {
        support: '',
    }

    handleSupport = (event) => {
        this.setState({
            ...this.state, 
            support: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state });
        this.props.history.push('/comments');
    }

    render () {
        
        return (
            <>
            <h3>IS YOUR HAND BEING HELD.</h3>
            <br />
            <br />
            <input placeholder="rate 1 - 5" onChange={this.handleSupport} value={this.state.support}/> 
            <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Support);