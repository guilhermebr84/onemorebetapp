import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <h4 className="white" style={{ color: "white" }}>
        One More BET App
      </h4>
      <ul>
        <Link to="/"> Home </Link>
        <Link to="/newbet"> Nova Aposta </Link>
        <Link to="/readbet"> Consultar Apostas </Link>
        <Link to="/readapi"> Ver Ligas e Times </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
