import React from 'react';
import { 
  BrowserRouter as Router,
  Routes, // no lugar de Switch
  Route
  // etc.
} from "react-router-dom";

import { Home } from './pages/Home';
import { Cadastrar } from './pages/Cadastrar';
import { Visualizar } from './pages/Visualizar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} /> 
          <Route path='/cadastrar' element={<Cadastrar/>} /> 
          <Route path='/visualizar/:id' element={<Visualizar/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
