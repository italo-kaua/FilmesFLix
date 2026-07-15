import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>FILMESFLIX</h2>

          <p>
            Descubra os melhores filmes e séries em um só lugar. Explore
            lançamentos, favoritos e encontre seu próximo filme para assistir.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>

          <Link to="/">Home</Link>
          <a href="#">Filmes</a>
          <Link to="/series">Séries</Link>
          <Link to="/favoritos">Favoritos</Link>
        </div>

        <div className="footer-links">
          <h3>Categorias</h3>

          <a href="#">Ação</a>
          <a href="#">Comédia</a>
          <a href="#">Drama</a>
          <a href="#">Terror</a>
          <a href="#">Ficção Científica</a>
        </div>

        <div className="footer-links">
          <h3>Informações</h3>

          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <a href="#">Política de Privacidade</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 FilmesFlix. Projeto desenvolvido para estudos utilizando React
          e TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
