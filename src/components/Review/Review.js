import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {
    state = {
    }

    submitFeedback = () => {
        console.log('submitFeedback');
        axios.post('/feedback')
            .then(response => {
                console.log('Submitted feedback', response.data);
            })
            .catch( error => {
                console.log('Issue getting feedback', error);
            });
    }

    feelingRating() {
        console.log('testtest', this.props.reduxState);        
        return this.props.reduxState;
    }

    understandingRating() {
        console.log('testtest', this.props.reduxState);        
        return this.props.reduxState;
    }
    
    render () {
        console.log(this.props.reduxState);
        
        return (
            <>
            <h2>Review Feedback</h2>
            <p>Feeling: {this.props.reduxState.feedbackReducer.feeling}</p>
            <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
    
            <button onClick={this.submitFeedback}>Submit Feedback</button> 
            
            </>
        );
    }

    // understandingRating() {
    //     console.log('testtest', this.props.reduxState);        
    //     return this.props.reduxState;
    // }
    
    // render () {
    //     console.log(this.props.reduxState);
        
    //     return (
    //         <>
    //         <h2>Review Feedback</h2>
    //         <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
    
    //         <button onClick={this.submitFeedback}>Submit Feedback</button> 
            
    //         </>
    //     );
    // }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Review);