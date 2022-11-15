import React from "react";
import '../hojas de estilos/contador.css';

function Contador({numClic}) {
    return(
        <div className="containerContador">
            
        <div className="contador">
            {numClic}
        </div>
        </div>
    );
}

export default Contador;