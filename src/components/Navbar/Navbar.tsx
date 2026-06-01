import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/about">About</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
    );
};

export default Navbar;