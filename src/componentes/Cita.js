
import React from 'react'

export default function Cita({nombre,propetario,fecha,hora,sintomas}) {
  return (
    <div class="cita">
    <p>Mascota: <span>{nombre}</span>{nombre}</p>
    <p>Dueño: <span>{propetario}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas: <span>{sintomas}</span></p>
    <button class="button elimnar u-full-width">Eliminar ×</button>
  </div>
  )
}
