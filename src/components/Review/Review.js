import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class Review extends Component {

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

    render () {
        return (
            <>
            <h3>Review Feedback</h3>
    
            <button onClick={this.submitFeedback}>Submit Feedback</button> 
            
            </>
        );
    }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Review);