import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produtos';
import Midias from './pages/Midias';
import BoneBerrante from './pages/BoneBerrante.jsx';
import BoneRoots from './pages/BoneRoots.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/produto' element={<Produto/>} />
        <Route path='/midias' element={<Midias/>} />
        <Route path='/produto/boneBerrante' element={<BoneBerrante/>} />
        <Route path='/produto/boneRoots' element={<BoneRoots/>} />
        <Route path='#' element={<h1>NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
