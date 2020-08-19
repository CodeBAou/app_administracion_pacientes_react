import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../assets/css/Formulario.css';

const Formulario = ({SetCita}) => {

    const [cita,ActualizarCita]=useState({
        id:'',
        dni:'',
        nombre:'',
        provincia:'',
        data:'',
        hora:'',
        sintomas:''
    });
    
    const SetData=e=>{
        ActualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        });
    }

    const {dni,nombre,provincia,data,hora,sintomas} = cita;

    const AgregarCita= e => {
        
        e.preventDefault();

        cita.id=uuidv4();

        SetCita(cita);

        ActualizarCita({
            id:'',
            dni:'',
            nombre:'',
            provincia:'',
            data:'',
            hora:'',
            sintomas:''
        });
    }

    return (

        <div className="Content_Form">

            <h2 className="h2-title-form">Crear Cita</h2>

            <form id="FormCit" className="form_Api_Pacientes" onSubmit={AgregarCita}>
               <label className="label_form_pacientes">DNI</label><br/>
               <input type="text" name="dni" className="input_form_pacientes" type="text" onChange={SetData} value={dni} required/><br/>
               <label className="label_form_pacientes">Nombre Paciente</label><br/>
               <input type="text" name="nombre" className="input_form_pacientes" type="text" onChange={SetData} value={nombre} required/><br/>
               <label className="label_form_pacientes">Provincia</label><br/>
               <input type="text" name="provincia" className="input_form_pacientes" type="text" onChange={SetData} value={provincia} required/><br/>
               <label className="label_form_pacientes">Data</label><br/> 
               <input type="date" name="data" className="input_form_pacientes" onChange={SetData} value={data} required/><br/>
               <label className="label_form_pacientes">Hora</label><br/> 
               <input type="time" name="hora" className="input_form_pacientes" onChange={SetData} value={hora} required/><br/>
               <textarea name="sintomas" className="text_area_form" maxLength="500" minLength="1" placeholder="sintomas..." onChange={SetData} value={sintomas} required></textarea><br/>
               <input id="btn_Submit_Form_Pacientes" type="submit" name="mascota" className="input_form_pacientes" />
            </form>

        </div>

    );

}

export default Formulario;