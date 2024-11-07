import { createContext, useState } from "react";

export const RepuestockContext = createContext();

const RepuestockProvider = ({ children }) => {
    const [repuestos, setRepuestos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    
    return (
        <RepuestockContext.Provider value={{ repuestos, setRepuestos, carrito, setCarrito, total, setTotal }}>
        {children}
        </RepuestockContext.Provider>
    );
};

export default RepuestockProvider;