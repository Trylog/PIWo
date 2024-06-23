import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebase';

const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleEmailLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign in with Email</button>
    </form>
  );
};

export default EmailLogin;
