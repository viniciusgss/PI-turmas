import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Turma from './turma'; 
import Login from './login'; // Certifique-se de que este componente está criado


// gerenciando rotas 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Turma />} />
        <Route path="./login.js" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;