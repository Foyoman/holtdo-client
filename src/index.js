import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Landing from './components/Landing';
import './style.scss';


import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const routes = (
  <Router>
    <Routes>
      <Route element={ <App /> }>
        <Route path="/" element={ <Landing /> } />
      </Route>
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  routes
);