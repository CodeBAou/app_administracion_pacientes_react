import React,{useState} from 'react';


const Formulario = ({saveCita}) => {

    const [cita,setCita]=useState(
    {
       id:'',
       dni:'',
       nombre:'',
       provincia:'',
       data:'',
       hora:'',
       sintomas:''
    });

    const ChangeCitaData = e => 
    {

        setCita(
            {...cita,[e.target.name]:e.target.value}
        );

    }

    const SubmitCita = e => {

        e.preventDefault();


        saveCita(cita);
    }

    return (

        <form onSubmit={SubmitCita}>
            <h2>Añadir Cita</h2>
            <label>DNI</label><br/>
            <input name="dni" type="text" pattern="[0-9]{8}[A-Z]{1}" onChange={ChangeCitaData} required/><br/>
            <label>Nombre</label><br/>
            <input name="nombre" type="text" pattern="[A-Za-z ]*" onChange={ChangeCitaData} required/><br/>
            <label>Provincia</label><br/>
            <input name="provincia" type="text" pattern="[A-Za-z]*" onChange={ChangeCitaData} required/><br/>
            <label>Data Cita</label><br/>
            <input name="data" type="date" onChange={ChangeCitaData} required/><br/>
            <label>Hora</label><br/>
            <input name="hora" type="time" onChange={ChangeCitaData} required/><br/>
            <label>Sintomas</label><br/>
            <textarea name="sintomas" minLength="10" onChange={ChangeCitaData} required></textarea><br/>
            <input className="SubmitBTN" type="submit" value="Añadir"/>
        </form>

    );

}

export default Formulario;