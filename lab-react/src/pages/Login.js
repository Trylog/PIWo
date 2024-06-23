import React from 'react';
import GoogleLogin from '../components/GoogleLogin';
import EmailLogin from '../components/EmailLogin';
import EmailRegister from '../components/EmailRegister';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin />
      <EmailLogin />
      <h1>Register</h1>
      <EmailRegister />
    </div>
  );
};

export default Login;
