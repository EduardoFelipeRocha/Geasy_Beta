import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Cad from './cad'; 
import Dashboard from './Dashboard'; 
import Geasy from './Geasy';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault(); 

    if (email && password) {
      navigate('/dashboard');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="icon">
          <i className="user-icon"></i>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email ID"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <div className="options">
            <label>
              <input type="checkbox" /> Lembrar Senha
            </label>
          </div>
          <button type="submit">Login</button>
          <button
            type="button"
            className="register-btn"
            onClick={() => navigate('/cadastro')}
          >
            Registrar-se
          </button>
          <a href="/">Esqueci a Senha?</a>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Geasy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cad />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
