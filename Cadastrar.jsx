import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'src/style.css'; // Corrigido: adicionado ../ para sair da pasta pages

const Cadastrar = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        // Aqui você pode adicionar a lógica de cadastro
        console.log('Cadastro attempt:', { nome, email, senha });

        // Redirecionar para o login após o cadastro
        navigate('/login');
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            placeholder="Digite seu nome completo"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Digite seu email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmarSenha">Confirmar Senha:</label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            required
                            placeholder="Confirme sua senha"
                        />
                    </div>

                    <button type="submit" className="btn-primary">Cadastrar</button>
                </form>

                <p className="auth-link">
                    Já tem uma conta? <Link to="/login">Faça login</Link>
                </p>
                <p className="auth-link">
                    <Link to="/">Voltar para a página inicial</Link>
                </p>
            </div>
        </div>
    );
};

export default Cadastrar;