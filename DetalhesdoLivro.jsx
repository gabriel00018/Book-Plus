import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'src/style.css'; // Corrigido: adicionado ../ para sair da pasta pages

// Mesmos dados do catálogo
const livrosData = [
    { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', categoria: 'Fantasia', faixaEtaria: '12+', imagem: 'https://via.placeholder.com/300', descricao: 'Uma aventura épica na Terra Média. A sociedade do anel precisa destruir o Um Anel antes que ele caia nas mãos de Sauron.' },
    { id: 2, titulo: '1984', autor: 'George Orwell', categoria: 'Ficção Científica', faixaEtaria: '16+', imagem: 'https://via.placeholder.com/300', descricao: 'Em um futuro distópico, Winston Smith luta contra o regime totalitário do Grande Irmão.' },
    { id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis', categoria: 'Literatura Brasileira', faixaEtaria: '14+', imagem: 'https://via.placeholder.com/300', descricao: 'Bentinho conta sua história de amor com Capitu e suas dúvidas sobre uma possível traição.' },
    { id: 4, titulo: 'Harry Potter', autor: 'J.K. Rowling', categoria: 'Fantasia', faixaEtaria: '10+', imagem: 'https://via.placeholder.com/300', descricao: 'Harry descobre que é um bruxo e começa sua jornada em Hogwarts.' },
    { id: 5, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', categoria: 'Infantil', faixaEtaria: '8+', imagem: 'https://via.placeholder.com/300', descricao: 'Um piloto perdido no deserto encontra um pequeno príncipe de outro planeta.' }
];

const DetalhesdoLivro = () => {
    const { id } = useParams();
    const [livro, setLivro] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulando busca do livro pelo ID
        const livroEncontrado = livrosData.find(l => l.id === parseInt(id));

        setTimeout(() => {
            setLivro(livroEncontrado);
            setLoading(false);
        }, 500); // Simulando delay de carregamento
    }, [id]);

    if (loading) {
        return (
            <div className="loading-container">
                <p>Carregando detalhes do livro...</p>
            </div>
        );
    }

    if (!livro) {
        return (
            <div className="error-container">
                <h2>Livro não encontrado</h2>
                <Link to="/catalogo" className="btn-primary">Voltar ao Catálogo</Link>
            </div>
        );
    }

    return (
        <div className="detalhes-container">
            <header className="header">
                <h1>Book Plus - Detalhes do Livro</h1>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/catalogo">Catálogo</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </header>

            <div className="livro-detalhes">
                <div className="livro-imagem">
                    <img src={livro.imagem} alt={livro.titulo} />
                </div>

                <div className="livro-info">
                    <h2>{livro.titulo}</h2>

                    <div className="info-grid">
                        <div className="info-item">
                            <strong>Autor:</strong>
                            <p>{livro.autor}</p>
                        </div>

                        <div className="info-item">
                            <strong>Categoria:</strong>
                            <p>{livro.categoria}</p>
                        </div>

                        <div className="info-item">
                            <strong>Faixa Etária:</strong>
                            <p>{livro.faixaEtaria}</p>
                        </div>
                    </div>

                    <div className="descricao">
                        <strong>Descrição:</strong>
                        <p>{livro.descricao}</p>
                    </div>

                    <div className="acoes">
                        <Link to="/catalogo" className="btn-secondary">Voltar ao Catálogo</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalhesdoLivro;