import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import LogIn from './pages/logIn/LogIn';
// import NavBar from './components/navBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
