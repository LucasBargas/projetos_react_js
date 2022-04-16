import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header';
import Profile from './pages/Profile/Profile';
import Modal from './layout/Modal/Modal';
import { UserStorage } from './utils/UserContext';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/*' element={<Profile />} />
        </Routes>
        <Modal />
      </UserStorage>
    </BrowserRouter>
  )
}

export default App;
