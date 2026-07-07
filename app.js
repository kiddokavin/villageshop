import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import CustomerDashboard from './components/CustomerDashboard';
import ShopDashboard from './components/ShopDashboard';
import './styles.css';

function App() {
  return (
    <div>
      <h1>QuickCart Web App</h1>
      <Register />
      <Login />
      <CustomerDashboard />
      <ShopDashboard />
    </div>
  );
}

export default App;
