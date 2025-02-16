import React, { useState } from "react";
import './App.css'
import Dashboard from './components/Dashboard'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Cookies from 'universal-cookie'

function App() {
  const cookies = new Cookies()
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={!isAuth? <Login setIsAuth={setIsAuth} /> : <Dashboard setIsAuth={setIsAuth} />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
