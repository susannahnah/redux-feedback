import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

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