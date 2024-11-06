// src/pages/LoginPage.js
import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = async (e) => {
      e.preventDefault();
      try {
         await signInWithEmailAndPassword(auth, email, password);
         alert("Logged in successfully!");
      } catch (error) {
         console.error(error);
         alert("Login failed!");
      }
   };

   return (
      <div>
         <h1>Login</h1>
         <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
         </form>
      </div>
   );
};

export default LoginPage;
