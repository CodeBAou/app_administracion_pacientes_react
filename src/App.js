import React,{useState} from 'react';


import PropTypes from 'prop-types';

function App() {

   

  return (

    <div className="content">

    <div className="Header_Api_Pacientes">

        <h1 className="Title_Page_pacientes">Administracion Citas Pacientes</h1>

        <div className="Select_page">

            <button id="Select_añadir" className="btn-Select_page" onClick={PageVisualizeAñadir}>+</button>
            <button id="Select_ver" className="btn-Select_page" onClick={PageVisualizeVer}>ver</button>

        </div>

    </div>

    <div id="Api_Paciente_content_unic" className="Api_Pacientes_content">

        <div className="Formulario_content">

           

        </div>

        <div className="Citas_content">
        
           
        </div>

    </div>

</div>
  );
}

export default App;
