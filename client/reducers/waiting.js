import {
  SHOW_ERROR,
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS} from '../actions/questions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return true

    case RECEIVE_QUESTIONS:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
