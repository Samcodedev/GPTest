import './App.css'
import Dashboard from './components/Dashboard'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SubDashboard from './components/DashboardComponents/subDash';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dash" element={<SubDashboard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
