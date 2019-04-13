import React from 'react';
import Question from '../Question/Question';
import Answer from '../Answer/Answer'

class QuizContainer extends Component {
  constructor() {
    super();
    this.state = {
      category: ''
    }
  }

  

  render() {
  
    return (
      <div className="header-img">
        <Question question={props.studySet.question} />
        <Answer correctAnswer={props.studySet.correctAnswer} allAnswers={props.studySet.allAnswers}/>
      </div>
    )
  }
}


export default QuizContainer;