import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  // const user = null;
  
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
