import React from 'react';
import { 
  BrowserRouter as Router,
  Routes, // no lugar de Switch
  Route
  // etc.
} from "react-router-dom";

import { Home } from './pages/Home';
import { Cadastrar } from './pages/Cadastrar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} /> 
          <Route path='/Cadastrar' element={<Cadastrar/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
