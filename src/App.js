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
import { Cadastrarvendedor } from './pages/Cadastrarvendedor';
import { Listavendedores } from './pages/Listavendedores';
// import { Consolidadovendedores } from './pages/Consolidadovendedores';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} /> 
          <Route path='/cadastrar' element={<Cadastrar/>} /> 
          <Route path='/visualizar/:id' element={<Visualizar/>} /> 
          <Route path='/cadastrarvendedor' element={<Cadastrarvendedor/>} />
          <Route path='/listavendedores' element={<Listavendedores/>} />
          {/* <Route path='/consolidadovendedor/:id' element={<Consolidadovendedores/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
