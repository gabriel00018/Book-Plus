import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Paginainicial from './pages/Paginainicial';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import CatalogodeLivros from './pages/CatalogodeLivros';
import DetalhesdoLivro from './pages/DetalhesdoLivro';
import './style.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Paginainicial />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastrar />} />
                    <Route path="/catalogo" element={<CatalogodeLivros />} />
                    <Route path="/livro/:id" element={<DetalhesdoLivro />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;