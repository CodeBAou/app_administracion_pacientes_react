import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './assets/css/App.css';
import Formulario from './components/Formulario';
import TarjetaCita from './components/TarjetaCita';

function App() {

    //Pages = añadir/ver
    const [page,SetPage]=useState('añadir');

    const [citas,SetCitas]=useState([
      {
        id:1,
        dni:'44663397L',
        nombre:'Boris Alvarez',
        provincia:'Ourense',
        data:'05/08/2020',
        hora:'20:45',
        sintomas:'Dolor de cabeza y estomago'
      }
    ]);

    const MobilePageAñadir = () => {

      if(page == 'ver'){

        SetPage('añadir');
        document.getElementById('BodyCa').style.animation = "DesplazamientoBodyMobile_Right 1s forwards";
      }
     
    }

    const MobilePageVer = () => {

      if(page == 'añadir'){

        SetPage('ver');
        document.getElementById('BodyCa').style.animation = "DesplazamientoBodyMobile_Left 1s forwards";
      }
    }

    const SaveCita= (cita) => {
      //Falta agregar id aqui
      SetCitas([...citas,cita]);
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
                citas.map(cita => (
                  <TarjetaCita cita={cita}/>
                ) )
              }
          </div>

      </div>

    </div>

  );
}

export default App;
