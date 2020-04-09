import axios from 'axios';

import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('https://edu-tech--api-csg67gideq-de.a.run.app/signup', formProps);

    const { token } = response.data;
    dispatch({ type: AUTH_USER, token });
    localStorage.setItem('token', token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, text: 'That email address is already in use' });
  }
};

export const login = (formProps, callback) => async dispatch => {
  try {
    //const response = await axios.post('http://localhost:8000/login', formProps);
    const response = await axios.post('https://retail-cloud-dash-j5dfby4oya-de.a.run.app/login', formProps);

    const { Token } = response.data;


    dispatch({ type: AUTH_USER, Token });
    localStorage.setItem('Token', Token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      text: 'That email or password were not recognised'
    });
  }
};

export const forgot = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "https://edu-tech--api-csg67gideq-de.a.run.app/forgot_password",
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Email is not recognised"
    });
  }
};

export const reset = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "https://edu-tech--api-csg67gideq-de.a.run.app/reset_password",
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: "please resend the forgot password link" });
  }
};


export const signout = () => {
  localStorage.removeItem('token');
  return { type: AUTH_USER, token: '' };
};