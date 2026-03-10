import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'src/style.css'; // Corrigido: adicionado ../ para sair da pasta pages

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de autenticação
        console.log('Login attempt:', { email, senha });
        // Redirecionar para o catálogo após o login
        navigate('/catalogo');
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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

                    <button type="submit" className="btn-primary">Entrar</button>
                </form>

                <p className="auth-link">
                    Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
                </p>
                <p className="auth-link">
                    <Link to="/">Voltar para a página inicial</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;