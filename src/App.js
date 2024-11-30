import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Home } from './pages/home';
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login';
import { Layout } from './Layout';

import ProtectedRoute from './ProtectedRoute';

function App() {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState(''); 

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    const storedUsername = localStorage.getItem('username');
    if (storedAuth === 'true') {
      setAuth(true);
      setUsername(storedUsername);
    }
  });

  const login = (username, password) => {
    if (username === 'uncinc' && password === 'letmein') {
      setAuth(true);
      setUsername(username); 
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', username); 
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setAuth(false);
    setUsername(''); 
    localStorage.removeItem('auth');
    localStorage.removeItem('username'); 
  };

  return (
    <Router>
      <Routes>
        <Route element={<Layout auth={auth} logout={logout} />}>
          <Route path='/' element={<Home username={username} />} />
          <Route path='/login' element={<Login login={login} />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute auth={auth} element={<Dashboard />} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
