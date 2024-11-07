const Acceso = () => {
    return (
        <main>
            <div className="main-titulo">
                <h1>Acceso de usuarios</h1>
            </div>
            <div className="container mt-5 mb-5 acceso">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Correo electrónico</label>
                                <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                        </form>
                    </div>
                 </div>
            </div>
        </main>
    );
};

export default Acceso;