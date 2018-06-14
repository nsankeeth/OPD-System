'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types";

export default class AddQuestionnaire extends Component {
    static get propTypes() {
        return {
            addQuestionnaire: PropTypes.func,
            id:PropTypes.string,
            question: PropTypes.string,
            answer1:PropTypes.string,
            answer2:PropTypes.string,
            answer3:PropTypes.string,
            answer4:PropTypes.string,
            answer5:PropTypes.string
        }
    }

    constructor(props) {
       super(props);
    }

    onIdChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.id = event.target.value;
     }

    onQuestionChange(event) {
       event.preventDefault();
       event.stopPropagation();
       this.question = event.target.value;
    }

    onAnswer1Change(event) {
        event.preventDefault();
        event.stopPropagation();
        this.answer1 = event.target.value;
     }

     onAnswer2Change(event) {
        event.preventDefault();
        event.stopPropagation();
        this.answer2 = event.target.value;
     }

     onAnswer3Change(event) {
        event.preventDefault();
        event.stopPropagation();
        this.answer3 = event.target.value;
     }

     onAnswer4Change(event) {
        event.preventDefault();
        event.stopPropagation();
        this.answer4 = event.target.value;
     }

     onAnswer5Change(event) {
        event.preventDefault();
        event.stopPropagation();
        this.answer5 = event.target.value;
     }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
       
           this.props.addQuestionnaire({id:this.id, question:this.question, answer1:this.answer1, answer2:this.answer2, answer3:this.answer3, answer4:this.answer4, answer5:this.answer5});
           
        
    }

    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}>
               <label>id:</label>
               <input type="text" onChange={event => this.onIdChange(event)}/>
               <label>Question:</label>
               <input type="text" onChange={event => this.onQuestionChange(event)}/>
               <label>Answer 1:</label>
               <input type="text" onChange={event => this.onAnswer1Change(event)}/>
               <label>Answer 2:</label>
               <input type="text" onChange={event => this.onAnswer2Change(event)}/>
               <label>Answer 3:</label>
               <input type="text" onChange={event => this.onAnswer3Change(event)}/>
               <label>Answer 4:</label>
               <input type="text" onChange={event => this.onAnswer4Change(event)}/>
               <label>Answer 5:</label>
               <input type="text" onChange={event => this.onAnswer5Change(event)}/>
               <button type="submit">Add Questionnaire</button>
            </form>
        </div>;
    }
}
