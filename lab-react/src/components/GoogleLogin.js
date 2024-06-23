// src/components/GoogleLogin.js
import React from 'react';
import { auth, googleProvider, signInWithPopup } from '../firebase';

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleGoogleLogin}>Sign in with Google</button>
  );
};

export default GoogleLogin;
