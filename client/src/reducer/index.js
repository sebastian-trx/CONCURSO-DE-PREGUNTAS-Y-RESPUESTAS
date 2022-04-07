import {
  SIGN_UP,
  LOCAL_LOGIN,
  GET_INFO,
  GET_QUESTIONS,
  UPDATE_USER_SCORE,
  RANDOM_QUESTION_BY_LEVEL,
  POST_QUESTION
} from "../actions/const";

const initialState = {
  userInfo: [],
  localLogin: [],
  signUp: [],
  questions: [],
  questions1: [],
  randomQuestionByLevel:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        signUp: action.payload,
      };
    case LOCAL_LOGIN:
      return {
        ...state,
        localLogin: action.payload,
      };
    case GET_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        questions1: action.payload
      };
    case UPDATE_USER_SCORE:
      return {
        ...state,
      };
    case RANDOM_QUESTION_BY_LEVEL:
      let allQuestions = state.questions1;
      let filteredByLevel = allQuestions.filter((item) => item.level === action.payload);
      let random = Math.round (Math.random() * (filteredByLevel.length-1 - 0) + 0)
      let randomQuestionByLevel = filteredByLevel[random]
      return {
        ...state,
        randomQuestionByLevel: randomQuestionByLevel
      };
      case POST_QUESTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default rootReducer;
