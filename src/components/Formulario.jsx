import React,{useState} from 'react';



const Formulario = ({SetCita}) => {

    const [cita,setCita]=useState({
       id:'',
       dni:'',
       nombre:'',
       provincia:'',
       data:'',
       hora:'',
       sintomas:''
    });

    const ChangeCitaData= () => {
        setCita();
    }

    return (

        <form>
            <h2>Añadir Cita</h2>
            <label>DNI</label><br/>
            <input name="dni" type="text"/><br/>
            <label>Nombre</label><br/>
            <input name="nombre" type="text"/><br/>
            <label>Provincia</label><br/>
            <input name="provincia" type="text"/><br/>
            <label>Data Cita</label><br/>
            <input name="data" type="date"/><br/>
            <label>Hora</label><br/>
            <input name="hora" type="time" /><br/>
            <label>Sintomas</label><br/>
            <textarea name="sintomas" minlength="10"></textarea><br/>
            <input className="SubmitBTN" type="submit" value="Añadir"/>
        </form>

    );

}

export default Formulario;