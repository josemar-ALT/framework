import React from 'react';
import LivroLista from './LivroLista';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroDados from './LivroDados';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <div>
            <LivroLista />
            <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">Livros</Link>
                  <div className="collapse navbar-collapse">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <Link className="nav-link" to="/">Lista de Livros</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/dados">Dados do Livro</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <Routes>
              <Route path="/" element={<LivroLista />} />
              <Route path="/dados" element={<LivroDados />} />
          </Routes>
      </BrowserRouter>
        </div>
    );
};
export default App;



