import request from 'superagent'

import {showError} from './error'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'

export const requestQuestions = () => {
  return {
    type: REQUEST_QUESTIONS
  }
}

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions.map(question => question.data)
  }
}

export function fetchQuestions (query) {
  return (dispatch) => {
    dispatch(requestQuestions())
    request
      .get(`/api/v1/questions/${query}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receiveQuestions(res.body))
      })
  }
}
