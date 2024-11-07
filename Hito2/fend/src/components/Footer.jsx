import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-light text-black pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 coordenadas">
                        <p className="titulo">RepueStock SPA</p>
                        <p className="texto">Avenida Ventisquero 1265</p>
                        <p className="texto">Renca</p>
                        <p className="texto">Región Metropolitana</p>
                        <p className="texto">contacto@repuestock.cl</p>
                        <p className="texto">+56 2 2300 0000</p>
                    </div>
                    <div className="col-md-4">
                        <p className="titulo">Enlaces</p>
                        <ul className="list-unstyled">
                            <li><NavLink to="/" className="text-black texto">Inicio</NavLink></li>
                            <li><NavLink to="/productos" className="text-black texto">Productos</NavLink></li>
                            <li><NavLink to="/contacto" className="text-black texto">Contacto</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <p className="titulo">Síguenos</p>
                        <ul className="list-unstyled">
                            <li><a href="https://facebook.com" className="text-black texto">Facebook</a></li>
                            <li><a href="https://twitter.com" className="text-black texto">Twitter</a></li>
                            <li><a href="https://instagram.com" className="text-black texto">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;