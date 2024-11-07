import { useNavigate } from 'react-router-dom';

const Registroexistoso = () => {
    const navigate = useNavigate();

    const handleAcceder = () => {
        navigate('/acceso');
    };

    return (
        <main>
            <div className="main-titulo">
                <h1>Su usuario ha sido creado</h1>
            </div>
            <p className="texto-home">A partir de ahora puede aceder al catálogo de repuestos</p>
            <button className="btn btn-primary" onClick={handleAcceder}>Acceder</button>
        </main>
    );
};

export default Registroexistoso;