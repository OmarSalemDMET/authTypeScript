// src/pages/LoginPage.tsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './regInfo.css'
function  LoginPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  return (
    <>
    <div><h1 className='bigHeader'>Log In</h1></div>
    <form onSubmit={handleSubmit}>
      <div className='centerDiv'>
        <div>
        <label>Email</label>
        <input className='InputSty' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input className='InputSty' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className='InputSty' type="submit">Login</button>
      </div>
    </form>
    </>
  );
};

export default LoginPage;
