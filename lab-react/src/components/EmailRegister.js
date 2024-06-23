import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase';

const EmailRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleEmailRegister}>
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
      <button type="submit">Register with Email</button>
    </form>
  );
};

export default EmailRegister;
