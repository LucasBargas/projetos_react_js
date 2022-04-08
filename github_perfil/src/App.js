import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/*' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
