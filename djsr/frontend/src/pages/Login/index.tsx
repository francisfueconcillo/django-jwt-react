import React from 'react';

import { LoginForm } from '../../components/LoginForm';
import { axiosInstance } from './AxiosApi.js';

export const Login = () => {

  // handleSubmit(event) {
  //     event.preventDefault();
      
  //     axiosInstance.post('/token/obtain/', {
  //         username: this.state.username,
  //         password: this.state.password
  //     }).then(response => {
  //         axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
  //         localStorage.setItem('access_token', response.data.access);
  //         localStorage.setItem('refresh_token', response.data.refresh);
  //       }, error => {
  //         throw error;
  //       });
  // }

  return (
    <LoginForm />
  )
}