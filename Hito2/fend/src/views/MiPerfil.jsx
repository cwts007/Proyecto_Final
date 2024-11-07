const MiPerfil = () => {
    return (
        <main>
            <div className="main-titulo">
                <h1>Mi perfil</h1>
            </div>
            <div className="container mt-5 registro">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <form>
                            <div className="form-row">
                                <div className="col-md-5">
                                    <h3 className="text-start mb-4">Datos personales</h3>
                                    <div className="form-group">
                                        <p className="text-start fw-bold">Nombre y apellido</p>
                                        <p className="text-start">Juan González</p>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-start fw-bold">Teléfono</p>
                                        <p className="text-start">+56912341234</p>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-start fw-bold">Correo electrónico</p>
                                        <p className="text-start">juan@correo.com</p>
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <h3 className="text-start mb-4">Dirección</h3>
                                    <div className="form-group">
                                        <label htmlFor="direccionId">Identificador de Dirección</label>
                                        <input type="text" className="form-control" id="direccionId" placeholder="Ej. Casa Matriz, Sitio 1, Sitio Remoto" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="region">Región</label>
                                        <select className="form-control" id="region" required>
                                            <option value="">Selecciona una región</option>

                                            <option>Región de Arica y Parinacota</option>
                                            <option>Región de Tarapacá</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comuna">Comuna</label>
                                        <select className="form-control" id="comuna" required>
                                            <option value="">Selecciona una comuna</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rut">RUT</label>
                                        <input type="text" className="form-control" id="rut" placeholder="Ej. 97.654.321-0" required />
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <h3 className="text-start mb-4">&nbsp;</h3>
                                    <div className="form-group">
                                        <label htmlFor="calleNumero">Calle y Número</label>
                                        <input type="text" className="form-control" id="calleNumero" placeholder="Ingresa calle y número" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="oficina">Oficina / Departamento / Piso / Bodega</label>
                                        <input type="text" className="form-control" id="oficina" placeholder="Ej. Oficina 301" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="codigoPostal">Código Postal</label>
                                        <input type="text" className="form-control" id="codigoPostal" placeholder="Ingresa tu código postal" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="razonSocial">Razón Social</label>
                                        <input type="text" className="form-control" id="razonSocial" placeholder="Ej. Empresa S.A." required />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mt-3">Crear Usuario</button>
                        </form>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default MiPerfil;