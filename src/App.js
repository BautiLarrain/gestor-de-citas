import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div id="root">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <div class="one-half column">
              <h2>Crear mi Cita</h2>
              <form>
                <label>Nombre Mascota</label><input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value="" /><label>Nombre Dueño</label>
                <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value="" /><label>Fecha</label><input type="date" name="fecha" class="u-full-width" value="" /><label>hora</label>
                <input type="time" name="hora" class="u-full-width" value="" /><label>Sintomas</label><textarea name="sintomas" class="u-full-width"></textarea>
                <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
              </form>
            </div>
            <div class="one-half column">
              <h2>Administra tus citas</h2>
              <div class="cita">
                <p>Mascota: <span>Nina</span></p>
                <p>Dueño: <span>Martin</span></p>
                <p>Fecha: <span>2021-08-05</span></p>
                <p>Hora: <span>08:20</span></p>
                <p>Sintomas: <span>Le duele la pierna</span></p>
                <button class="button elimnar u-full-width">Eliminar ×</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
