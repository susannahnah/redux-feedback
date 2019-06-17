import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

    state = {
        support: 0,
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
            <h3>HOW ARE YOU FEELING.</h3>
            `<button onClick={() => { this.props.history.push('/Comments') }}>Next</button>`
            </>
        )
    }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Support);