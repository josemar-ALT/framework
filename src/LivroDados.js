// LivroDados.js
//import React from 'react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/ControleLivros'; 
import controleEditora from './controle/ControleEditora'; 


const LivroDados = () => {
    const navigate = useNavigate();
    
    const [opcoes, setOpcoes] = useState([]);
    
    useEffect(() => {
        const editoras = controleEditora.getEditoras().map(editora => ({
            value: editora.codEditora,
            text: editora.nome
        }));
        setOpcoes(editoras);
    }, []);

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : '');


    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value));
    };

    const incluir = (evento) => {
        evento.preventDefault();
        
        const livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'), 
            codEditora
        };

        ControleLivros.incluir(livro);
        navigate('/'); 
    };

    return (
        <main>
            <h1>Cadastro de Livro</h1>
            <form onSubmit={incluir}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Resumo:</label>
                    <textarea
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Autores (um por linha):</label>
                    <textarea
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                    />
                </div>
                <div>
                    <label>Editora:</label>
                    <select value={codEditora} onChange={tratarCombo}>
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Incluir</button>
            </form>
        </main>
    );
};
export default LivroDados;