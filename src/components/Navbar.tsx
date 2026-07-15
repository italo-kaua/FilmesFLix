import { Link } from "react-router-dom";

import "./Navbar.css";

type NavbarProps = {
  onSearch: (value: string) => void;
};

const Navbar = ({ onSearch }: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className="movies">FILMESFLiX</h1>
      </div>

      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Filmes</Link>
        </li>
        <li>
          <Link to="/series">Séries</Link>
        </li>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
      </ul>

      <div className="search-container">
        <input
          type="search"
          className="search"
          placeholder="O que você procura?"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
