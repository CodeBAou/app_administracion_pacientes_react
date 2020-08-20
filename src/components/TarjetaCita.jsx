import React from 'react';
import '../assets/css/TarjetaCita.css';

const TarjetaCita= ({cita}) => {
    
    return (

        <div className="tarjeta_cita_content">
            <div className="Datos_Personales_content">
                <div className="tarjeta_cita_header">
                    <span className="data">{cita.data}</span>
                    <span className="data">{cita.hora}</span> 
                </div> 

                <div className="name_content">
                    <span className="data_name"><strong>Nombre:</strong></span> <span className="data">{cita.nombre}</span> 
                </div>
                
                <div className="dni_data_content">
                    <span className="data_name"> <strong>DNI:</strong></span> <span className="data">{cita.dni}</span> 
                </div>
                
                <div className="provincia_data_content">
                    <span className="data_name"><strong>Provincias:</strong></span> <span className="data">{cita.provincia}</span> 
                </div>
            </div>
            
            <div className="sintomas_content">
               <p className="data_sintomas">{cita.sintomas}</p>
            </div>
            
        </div>

    )
}

export default TarjetaCita;