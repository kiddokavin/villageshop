import React, { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', password: '', address: '' });

  const handleSubmit = async () => {
    await fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    alert('Registered successfully');
  };

  return (
    <div>
      <h2>Customer Registration</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Mobile" onChange={e => setForm({ ...form, mobile: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <input placeholder="Address" onChange={e => setForm({ ...form, address: e.target.value })} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
