import React, { Component } from 'react';


class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: [],
      correctAnswer: '',
      userAnswer: ''
    }
  }

  updateAnswers = () => {
    this.setState( {
      allAnswers: this.props.allAnswers,
      correctAnswer: this.props.correctAnswer
    } )
  }



  render() {
    let btns = this.state.allAnswers && this.state.allAnswers.map(a => {
      return (<button value={a}>a</button>)
    })
    return (
      {btns}
    )
  }
}


export default Answer;