import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/style.css'; // Corrigido: adicionado ../ para sair da pasta pages

// Dados simulados para exemplo
const livrosData = [
    { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', categoria: 'Fantasia', faixaEtaria: '12+', imagem: 'https://via.placeholder.com/150', descricao: 'Uma aventura épica na Terra Média' },
    { id: 2, titulo: '1984', autor: 'George Orwell', categoria: 'Ficção Científica', faixaEtaria: '16+', imagem: 'https://via.placeholder.com/150', descricao: 'Um clássico distópico' },
    { id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis', categoria: 'Literatura Brasileira', faixaEtaria: '14+', imagem: 'https://via.placeholder.com/150', descricao: 'Um dos maiores romances brasileiros' },
    { id: 4, titulo: 'Harry Potter', autor: 'J.K. Rowling', categoria: 'Fantasia', faixaEtaria: '10+', imagem: 'https://via.placeholder.com/150', descricao: 'A história do jovem bruxo' },
    { id: 5, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', categoria: 'Infantil', faixaEtaria: '8+', imagem: 'https://via.placeholder.com/150', descricao: 'Uma história filosófica para todas as idades' }
];

const CatalogodeLivros = () => {
    const [livros, setLivros] = useState([]);
    const [busca, setBusca] = useState('');
    const [filtroAutor, setFiltroAutor] = useState('');
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [autores, setAutores] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        // Simulando carregamento de dados
        setLivros(livrosData);

        // Extraindo autores e categorias únicas para os filtros
        const autoresUnicos = [...new Set(livrosData.map(livro => livro.autor))];
        const categoriasUnicas = [...new Set(livrosData.map(livro => livro.categoria))];

        setAutores(autoresUnicos);
        setCategorias(categoriasUnicas);
    }, []);

    // Filtrar livros baseado nos critérios
    const livrosFiltrados = livros.filter(livro => {
        const matchesBusca = livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
            livro.autor.toLowerCase().includes(busca.toLowerCase());
        const matchesAutor = filtroAutor ? livro.autor === filtroAutor : true;
        const matchesCategoria = filtroCategoria ? livro.categoria === filtroCategoria : true;

        return matchesBusca && matchesAutor && matchesCategoria;
    });

    return (
        <div className="catalogo-container">
            <header className="header">
                <h1>Book Plus - Catálogo</h1>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/cadastro">Cadastro</Link>
                </nav>
            </header>

            <div className="filtros-section">
                <h2>Buscar Livros</h2>

                <div className="busca-input">
                    <input
                        type="text"
                        placeholder="Buscar por título ou autor..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />
                </div>

                <div className="filtros">
                    <div className="filtro-group">
                        <label htmlFor="filtroAutor">Filtrar por Autor:</label>
                        <select
                            id="filtroAutor"
                            value={filtroAutor}
                            onChange={(e) => setFiltroAutor(e.target.value)}
                        >
                            <option value="">Todos os autores</option>
                            {autores.map(autor => (
                                <option key={autor} value={autor}>{autor}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filtro-group">
                        <label htmlFor="filtroCategoria">Filtrar por Categoria:</label>
                        <select
                            id="filtroCategoria"
                            value={filtroCategoria}
                            onChange={(e) => setFiltroCategoria(e.target.value)}
                        >
                            <option value="">Todas as categorias</option>
                            {categorias.map(categoria => (
                                <option key={categoria} value={categoria}>{categoria}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="livros-grid">
                {livrosFiltrados.length > 0 ? (
                    livrosFiltrados.map(livro => (
                        <div key={livro.id} className="livro-card">
                            <img src={livro.imagem} alt={livro.titulo} />
                            <h3>{livro.titulo}</h3>
                            <p><strong>Autor:</strong> {livro.autor}</p>
                            <p><strong>Categoria:</strong> {livro.categoria}</p>
                            <p><strong>Faixa Etária:</strong> {livro.faixaEtaria}</p>
                            <Link to={`/livro/${livro.id}`} className="btn-detalhes">
                                Ver Detalhes
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="nenhum-livro">Nenhum livro encontrado</p>
                )}
            </div>
        </div>
    );
};

export default CatalogodeLivros;