import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

    render () {
        return (
            <>
            <h3>HOW ARE YOU FEELING.</h3>
            `<button onClick={() => { this.props.history.push('/Support') }}>Next</button>`
            </>
        )
    }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Understanding);