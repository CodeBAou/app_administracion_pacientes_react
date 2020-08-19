import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './assets/css/App.css';

function App() {

    //Pages = añadir/ver
    const [page,SetPage]=useState('añadir');

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

 

  return (
      
    <div className="content">

      <div className="titulo_pagina">

        <h1>Administracion de Pacientes</h1>

        <div className="MenuMobile">
          <button className="btnMenuMobile" onClick={MobilePageAñadir}>+</button>
          <button className="btnMenuMobile" onClick={MobilePageVer}>citas</button>
        </div>

      </div>

      <div id="BodyCa" className="body_Carre">
          <div id="Page_Añadir" className="Header_Api_Pacientes ">

          </div>

          <div id="Page_Ver" className="Api_Pacientes_content ">

          </div>
      </div>

    </div>

  );
}

export default App;
