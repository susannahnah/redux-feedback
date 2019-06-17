import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './review.css';


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

    supportRating() {
        console.log('testtest', this.props.reduxState);        
        return this.props.reduxState;
    }

    commentRating() {
        console.log('testtest', this.props.reduxState);        
        return this.props.reduxState;
    }
    
    render () {
        console.log(this.props.reduxState);
        
        return (
            <>
            <br />
            <br />
            <br />
        
            <h2>Review Feedback</h2>
            <table id='reviewTable'>
                <thead>
                    <tr>
                        <td>I am feeling...</td>
                        <td>{this.props.reduxState.feedbackReducer.feeling}</td>
                    </tr>
                    <tr>
                        <td>I understand...</td>
                        <td>{this.props.reduxState.feedbackReducer.understanding}</td>
                    </tr>
                    <tr>
                        <td>I am supported...</td>
                        <td>{this.props.reduxState.feedbackReducer.support}</td>
                    </tr>
                    <tr>
                        <td>Additional complaining...</td>
                        <td>{this.props.reduxState.feedbackReducer.comments}</td>
                    </tr>
                    

                </thead>
            </table>
            <br />
            <br />

            {this.props.reduxState.reviewReducer ?<button onClick={this.submitFeedback}>Submit Feeedback</button>:<button onClick={this.submitFeedback}>Incomplete</button> }
        
            </>
        );
    }
}

const mapReduxStateToProps = (allFeedback) => ({
    reduxState: allFeedback
})

export default connect(mapReduxStateToProps)(Review);