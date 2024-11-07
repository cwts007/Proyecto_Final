import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { RepuestockContext } from "../context/RepuestockContext";

import logoBlanco from '../assets/img/logo_blanco.png';

const Header = () => {
    const { total } = useContext(RepuestockContext);

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-primary">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logoBlanco} alt="Repuestock" className="logo"/>
                    </NavLink>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/acceso">Acceso</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/registro">Registro</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/carrito">Carrito ({total})</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;