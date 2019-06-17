import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {

    state = {
        comments: '',
        submitButon: false,
    }

    handleComments = (event) => {
        this.setState({
            ...this.state, 
            comments: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            submitButon: true,
        }, ()=>{
            this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state });
            this.props.dispatch({ type: 'SUBMIT_FEEDBACK', payload: this.state.submitButon });
            this.props.history.push('/review');
            console.log(this.props.reduxState);
        });
    }

    render () {
        console.log(this.state.submitButon)
        return (
            <>
            <h3>ANYTHING ELSE YOU WANT TO CRY ABOUT.</h3>
            <textarea placeholder="sob story goes here" onChange={this.handleComments} value={this.state.comments}/> 
            <br />
            <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Comments);