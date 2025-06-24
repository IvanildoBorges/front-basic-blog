import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="p-2">
          <Link to="/home">Pagina inicial</Link>
        </li>
        <li className="p-2">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="p-2">
          <Link to="/">Sair</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
