import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Paginainicial = () => {
    return (
        <>
            {/* HEADER */}
            <header className="header">
                <div className="container">
                    <h1>Book <span>Plus</span></h1>
                    <nav className="nav-menu">
                        <Link to="/">Início</Link>
                        <a href="#sobre">Sobre</a>
                        <Link to="/catalogo">Catálogo</Link>
                        <a href="#contato">Contato</a>
                        <Link to="/login" className="btn-login">Entrar</Link>
                        <Link to="/cadastro" className="btn-cadastro">Cadastrar</Link>
                    </nav>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="hero" id="home">
                <div className="container">
                    <h2>Bem-vindo ao Book Plus</h2>
                    <p>Descubra um mundo de conhecimento através dos nossos livros. Mais de 10.000 títulos disponíveis para você ler e aprender.</p>
                    <Link to="/catalogo" className="btn-primary">
                        <span>📚</span> Explorar Catálogo
                    </Link>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="features" id="sobre">
                <div className="container">
                    <h2>Por que escolher o Book Plus?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📖</div>
                            <h3>Milhares de Livros</h3>
                            <p>Acesse nosso vasto catálogo com milhares de títulos de diversos gêneros e autores.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔍</div>
                            <h3>Busca Avançada</h3>
                            <p>Encontre livros por autor, categoria, título ou palavras-chave de forma rápida e eficiente.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Detalhes Completos</h3>
                            <p>Informações detalhadas sobre cada livro, incluindo sinopse, autor e faixa etária.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">⭐</div>
                            <h3>Avaliações</h3>
                            <p>Veja avaliações de outros leitores e compartilhe sua opinião sobre os livros.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📌</div>
                            <h3>Favoritos</h3>
                            <p>Salve seus livros favoritos e crie sua lista de leitura personalizada.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3>Recomendações</h3>
                            <p>Receba recomendações personalizadas baseadas nos seus interesses.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORIAS SECTION */}
            <section className="categorias" id="catalogo">
                <div className="container">
                    <h2>Navegue por Categorias</h2>
                    <div className="categorias-grid">
                        <div className="categoria-card">
                            <h3>Fantasia</h3>
                            <p>120+ livros</p>
                        </div>
                        <div className="categoria-card">
                            <h3>Ficção Científica</h3>
                            <p>95+ livros</p>
                        </div>
                        <div className="categoria-card">
                            <h3>Romance</h3>
                            <p>150+ livros</p>
                        </div>
                        <div className="categoria-card">
                            <h3>Mistério</h3>
                            <p>80+ livros</p>
                        </div>
                        <div className="categoria-card">
                            <h3>Biografia</h3>
                            <p>60+ livros</p>
                        </div>
                        <div className="categoria-card">
                            <h3>Infantil</h3>
                            <p>110+ livros</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DESTAQUE SECTION */}
            <section className="destaque">
                <div className="container">
                    <h2>Livros em Destaque</h2>
                    <div className="livros-preview">
                        <div className="preview-item">
                            <img src="https://via.placeholder.com/150x200/3498db/ffffff?text=Livro+1" alt="Livro 1" />
                            <h4>O Senhor dos Anéis</h4>
                            <p>J.R.R. Tolkien</p>
                        </div>
                        <div className="preview-item">
                            <img src="https://via.placeholder.com/150x200/2c3e50/ffffff?text=Livro+2" alt="Livro 2" />
                            <h4>1984</h4>
                            <p>George Orwell</p>
                        </div>
                        <div className="preview-item">
                            <img src="https://via.placeholder.com/150x200/f1c40f/2c3e50?text=Livro+3" alt="Livro 3" />
                            <h4>Dom Casmurro</h4>
                            <p>Machado de Assis</p>
                        </div>
                        <div className="preview-item">
                            <img src="https://via.placeholder.com/150x200/e74c3c/ffffff?text=Livro+4" alt="Livro 4" />
                            <h4>Harry Potter</h4>
                            <p>J.K. Rowling</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link to="/catalogo" className="btn-secondary">Ver todos os livros</Link>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta-section">
                <div className="container">
                    <h2>Comece sua jornada literária hoje!</h2>
                    <p>Cadastre-se grátis e tenha acesso a milhares de livros.</p>
                    <div className="cta-buttons">
                        <Link to="/cadastro" className="btn-primary">Criar conta gratuita</Link>
                        <Link to="/login" className="btn-secondary">Já tenho conta</Link>
                    </div>
                </div>
            </section>

            {/* NEWSLETTER SECTION */}
            <section className="newsletter">
                <div className="container">
                    <h2>Fique por dentro das novidades</h2>
                    <p>Receba recomendações e lançamentos diretamente no seu email.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Digite seu melhor email" required />
                        <button type="submit">Inscrever-se</button>
                    </form>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer" id="contato">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>Book Plus</h3>
                            <p>Sua biblioteca online com os melhores livros e uma experiência única de leitura.</p>
                        </div>

                        <div className="footer-section">
                            <h3>Links Rápidos</h3>
                            <ul>
                                <li><Link to="/">Início</Link></li>
                                <li><a href="#sobre">Sobre nós</a></li>
                                <li><Link to="/catalogo">Catálogo</Link></li>
                                <li><a href="#contato">Contato</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h3>Suporte</h3>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Ajuda</a></li>
                                <li><a href="#">Termos de uso</a></li>
                                <li><a href="#">Privacidade</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h3>Redes Sociais</h3>
                            <div className="social-links">
                                <a href="#" aria-label="Facebook">📘</a>
                                <a href="#" aria-label="Instagram">📷</a>
                                <a href="#" aria-label="Twitter">🐦</a>
                                <a href="#" aria-label="LinkedIn">💼</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2024 Book Plus. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Paginainicial;