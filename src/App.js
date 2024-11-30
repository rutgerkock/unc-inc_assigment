import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
  }, []);

  const login = (username, password) => {
    if (username === 'uncinc' && password === 'letmein') {
      setAuth(true);
      setUsername(username); 
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', username); 
    } else {
      alert('Ongeldige gegevens!');
    }
  };

  const logout = () => {
    setAuth(false);
    setUsername(''); 
    localStorage.removeItem('auth');
    localStorage.removeItem('username'); 
  };

  const pageTransition = {
    initial: { opacity: 0, x: -400, scale: 0.95 }, 
    animate: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 25 } },  
    exit: { opacity: 0, x: 100, scale: 1.05, transition: { duration: 0.3 } },  
  };

  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route element={<Layout auth={auth} logout={logout} />}>
            <Route 
              path="/" 
              element={
                <motion.div {...pageTransition}>
                  <Home username={username} />
                </motion.div>
              }
            />
            <Route 
              path="/login" 
              element={
                <motion.div {...pageTransition}>
                  <Login login={login} />
                </motion.div>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute auth={auth} element={
                  <motion.div {...pageTransition}>
                    <Dashboard />
                  </motion.div>
                } />
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
