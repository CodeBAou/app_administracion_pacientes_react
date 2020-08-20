import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './assets/css/App.css';
import Formulario from './components/Formulario';
import TarjetaCita from './components/TarjetaCita';

function App() {

  //Pages = añadir/ver
  const [page,SetPage]=useState('añadir');

  const [citas,SetCitas]=useState([]);

  const MobilePageAñadir = () => {

    if(page == 'ver')
    {
      SetPage('añadir');
      document.getElementById('BodyCa').style.animation = "DesplazamientoBodyMobile_Right 1s forwards";
    }

  }

  const MobilePageVer = () => {

    if(page == 'añadir')
    {
      SetPage('ver');
      document.getElementById('BodyCa').style.animation = "DesplazamientoBodyMobile_Left 1s forwards";
    }

  }

  const SaveCita= (cita) => {
    //Falta agregar id aqui
    SetCitas(
      [...citas,cita])
    ;

  }

  const EliminarCita = (id) => {
    
    let citadasFiltradas=citas.filter(cita => cita.id != id);
    SetCitas(citadasFiltradas);
  }


  return (
      
    <div className="content">

      <div className="titulo_pagina_content">

        <h1>Administracion de Pacientes</h1>

        <div className="MenuMobile">
          <button className="btnMenuMobile" onClick={MobilePageAñadir}>+</button>
          <button className="btnMenuMobile" onClick={MobilePageVer}>citas</button>
        </div>

      </div>

      <div id="BodyCa" className="body_Carre">

          <div id="Page_Añadir" className="Header_Api_Pacientes ">

            <Formulario
              saveCita={SaveCita}
            />  

          </div>

          <div id="Page_Ver" className="Api_Pacientes_content ">
            {
              citas.length < 1 

              ? <p className="Message">No Hay Citas</p>

              : citas.map(cita => (

                <TarjetaCita
                  key={cita.id} 
                  cita={cita}
                  EliminarCita={EliminarCita}
                />

                ))
            }
              
          </div>

      </div>

    </div>

  );
}

Formulario.propTypes=
  {
    saveCita:PropTypes.func.isRequired
  }

TarjetaCita.propTypes=
  {
    cita:PropTypes.object.isRequired,
    EliminarCita:PropTypes.func.isRequired
  }

export default App;
