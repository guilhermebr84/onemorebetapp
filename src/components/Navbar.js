import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="Navbar">
        <ul>
            <Link to="/"> Home </Link>
            <Link to="/newbet"> Escolher Liga e Jogos </Link>
            <Link to="/readbet"> Consultar Apostas </Link>
        </ul>
      </nav>
    );
  }
   
  export default Navbar;