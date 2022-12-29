import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Trailer from './Components/Trailer';
import "./App.css";

function App() {


  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:title' element={<Trailer />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
