import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produtos';
import Midias from './pages/Midias';
import BoneBerrante from './pages/BoneBerrante.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/produto' element={<Produto/>} />
        <Route path='/midias' element={<Midias/>} />
        <Route path='/produto/bone' element={<BoneBerrante/>} />
        <Route path='#' element={<h1>NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
