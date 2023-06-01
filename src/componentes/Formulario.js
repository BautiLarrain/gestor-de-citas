import React from 'react'

export default function Formulario({setLista,lista}) {
  const crearCita = (e) => {
    e.preventDefault();
    console.log(e.target.mascota.value)
    console.log(e.target.propietario.value)
    console.log( e.target.fecha.value);
    //creo new array a partir de lista
    let newarray=lista;
    //creo mi objeto
    const cita = 
      {nombre: e.target.mascota.value,
        propetario: e.target.propietario.value,
        fecha: e.target.fecha.value,
        hora: e.target.hora.value,
      sintomas: e.target.sintomas.value}
    
    //agrego mi objeto a new array    
    setLista([...lista,cita]);
  }
  return (
    <form onSubmit={crearCita}>       
          <label>Nombre Mascota</label>
          <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" required="true" />
          <label>Nombre Dueño</label><input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" required="true"   />
          <label>Fecha</label><input type="date" name="fecha" class="u-full-width" required="true"/>
          <label>hora</label><input type="time" name="hora" class="u-full-width" required="true"/>
          <label>Sintomas</label><textarea name="sintomas" class="u-full-width"required="true"></textarea>
          <button type="submit" class="u-full-width button-primary"  >Agregar Cita</button>
      </form>
  )
}
