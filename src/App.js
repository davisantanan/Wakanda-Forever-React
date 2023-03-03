import './App.css';
import React from 'react';
import Home from './pages/home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';
import Contato from './pages/contato/contato';




function App() {
    
  
  
  return (     
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/fotos' element={<Fotos />} />
          <Route path='/comentarios' element={<Comentarios />} />
        </Routes>
    </BrowserRouter>

 );
}

export default App;
