import axios from "axios";

import{
  SIGN_UP,
  LOCAL_LOGIN,
  GET_INFO,
  LOGOUT,
  GET_QUESTIONS,
  UPDATE_USER_SCORE,
  RANDOM_QUESTION_BY_LEVEL,
  POST_QUESTION
} from "./const"


export function signUp(payload) {
  return async function (dispatch) {
    await axios
      .post(`/user`, payload)
      .then((response) => {
        dispatch({
          type: SIGN_UP,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function localLogin(payload) {
  return async function (dispatch) {
    await axios
      .post(`/login`, payload, { withCredentials: true })
      .then((response) => {
        dispatch({
          type: LOCAL_LOGIN,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function getUserInfo() {
  return async function (dispatch) {
    const arr = await axios.get(`/session`, {
      withCredentials: true,
    });
    return dispatch({
      type: GET_INFO,
      payload: arr.data,
    });
  };
}

export function logout() {
  return async function (dispatch) {
    await axios.get(`/login/logout`, {
      withCredentials: true,
    });
    return dispatch({
      type: LOGOUT,
    });
  };
}

export function getQuestions() {
  return async function (dispatch) {
    const arr = await axios.get(`/question`, {
      withCredentials: true,
    });
    return dispatch({
      type: GET_QUESTIONS,
      payload: arr.data
    });
  };
}

export function updateUserScore(payload) {
  return async function (dispatch) {
    const arr = await axios.put(`/user`, payload ,{
      withCredentials: true,
    });
    return dispatch({
      type: UPDATE_USER_SCORE,
      payload: arr.data
    });
  };
}

export function randomQuestion(payload) {
  return function (dispatch) {
    return dispatch( {
      type: RANDOM_QUESTION_BY_LEVEL,
      payload,
    });
  }
  
}

export function postQuestion(payload) {
  return async function (dispatch) {
    await axios
      .post(`/question`, payload)
      .then((response) => {
        dispatch({
          type: POST_QUESTION,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

