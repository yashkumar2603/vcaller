import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './SignIn';
import Home from './Home';
import Room from './Room';
import EmptyCodePage from './EmptyCodePage';

function App() {
  const isAuthenticated = !!localStorage.getItem('email');  // Correctly check if user is authenticated

  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signin" />} />
      <Route path="/empty" element={<EmptyCodePage />} />
      <Route path="/room/:roomID" element={<Room />} />
      <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/signin"} />} />
    </Routes>
  );
}

export default App;
