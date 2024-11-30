import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home'
import { Dashboard } from './pages/dashboard'
import { Login } from './pages/login'
import { Layout } from './Layout';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={ <Layout/> }>
          <Route path='/' element={ <Home/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/dashboard' element={ <Dashboard/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
