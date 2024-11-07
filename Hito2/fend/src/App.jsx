import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';
import Acceso from './views/Acceso';
import Registro from './views/Registro';
import Registroexistoso from './views/Registroexitoso';
import MiPerfil from './views/MiPerfil';

import RepuestockProvider from './context/RepuestockContext';

function App() {

  return (
    <RepuestockProvider>
      <Header />
      <Routes>
        <Route 
            path="/" 
            element={<Home />} 
        />
        <Route 
            path="/acceso" 
            element={<Acceso />} 
        />
        <Route 
            path="/registro" 
            element={<Registro />} 
        />
        <Route 
            path="/registro_exitoso" 
            element={<Registroexistoso />} 
        />
        <Route 
            path="/miperfil" 
            element={<MiPerfil />} 
        />                  
      </Routes>
      <Footer/>
    </RepuestockProvider>
  );
};

export default App;
