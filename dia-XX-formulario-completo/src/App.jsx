import "./App.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [edad, setEdad] = useState("");
  const [fecha, setFecha] = useState("");
  const [experiencia, setExperiencia] = useState(5);
  const [terminos, setTerminos] = useState(false);
  const [lenguajes, setLenguajes] = useState([]);
  const [modalidad, setModalidad] = useState("");
  const [pais, setPais] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [foto, setFoto] = useState(null);
  const [color, setColor] = useState("#000000");
  const [datos, setDatos] = useState(null);

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  const cambiarLenguaje = (lenguaje) => {
    if (lenguajes.includes(lenguaje)) {
      setLenguajes(lenguajes.filter((l) => l !== lenguaje));
    } else {
      setLenguajes([...lenguajes, lenguaje]);
    }
  };

  const enviar = (e) => {
    e.preventDefault();

    setDatos({
      nombre,
      correo,
      password,
      edad,
      fecha,
      experiencia,
      terminos,
      lenguajes,
      modalidad,
      pais,
      comentarios,
      foto: foto ? foto.name : "No seleccionada",
      color,
    });
  };

  return (
    <div className="contenedor">
      <h1>Registro De Estudiante</h1>

      <form onSubmit={enviar}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Correo</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Edad</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />

        <label>Fecha de nacimiento</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label>Nivel de experiencia: {experiencia}</label>
        <input
          type="range"
          min="1"
          max="10"
          value={experiencia}
          onChange={(e) => setExperiencia(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={terminos}
            onChange={(e) => setTerminos(e.target.checked)}
          />
          Acepto los términos y condiciones
        </label>

        <div>
          <strong>Lenguajes que conoce</strong>

          <label>
            <input
              type="checkbox"
              checked={lenguajes.includes("JavaScript")}
              onChange={() => cambiarLenguaje("JavaScript")}
            />
            JavaScript
          </label>

          <label>
            <input
              type="checkbox"
              checked={lenguajes.includes("Python")}
              onChange={() => cambiarLenguaje("Python")}
            />
            Python
          </label>

          <label>
            <input
              type="checkbox"
              checked={lenguajes.includes("Java")}
              onChange={() => cambiarLenguaje("Java")}
            />
            Java
          </label>
        </div>

        <div>
          <strong>Modalidad</strong>

          <label>
            <input
              type="radio"
              value="Presencial"
              checked={modalidad === "Presencial"}
              onChange={(e) => setModalidad(e.target.value)}
            />
            Presencial
          </label>

          <label>
            <input
              type="radio"
              value="Virtual"
              checked={modalidad === "Virtual"}
              onChange={(e) => setModalidad(e.target.value)}
            />
            Virtual
          </label>
        </div>

        <label>País</label>
        <select value={pais} onChange={(e) => setPais(e.target.value)}>
          <option value="">Seleccione un país</option>
          <option>Colombia</option>
          <option>México</option>
          <option>Argentina</option>
          <option>España</option>
        </select>

        <label>Comentarios</label>
        <textarea
          rows="4"
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
        />

        <label>Foto de perfil</label>
        <input
          type="file"
          onChange={(e) => setFoto(e.target.files[0])}
        />

        <label>Color favorito</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <button type="submit" disabled={!terminos || !emailValido}>
          Enviar
        </button>
      </form>

      {datos && (
        <div className="resumen">
          <h2>Resumen</h2>

          <p><strong>Nombre:</strong> {datos.nombre}</p>
          <p><strong>Correo:</strong> {datos.correo}</p>
          <p><strong>Contraseña:</strong> {datos.password}</p>
          <p><strong>Edad:</strong> {datos.edad}</p>
          <p><strong>Fecha:</strong> {datos.fecha}</p>
          <p><strong>Experiencia:</strong> {datos.experiencia}</p>
          <p><strong>Términos:</strong> {datos.terminos ? "Sí" : "No"}</p>
          <p><strong>Lenguajes:</strong> {datos.lenguajes.join(", ")}</p>
          <p><strong>Modalidad:</strong> {datos.modalidad}</p>
          <p><strong>País:</strong> {datos.pais}</p>
          <p><strong>Comentarios:</strong> {datos.comentarios}</p>
          <p><strong>Foto:</strong> {datos.foto}</p>
          <p><strong>Color:</strong> {datos.color}</p>

          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: datos.color,
              border: "1px solid black",
              borderRadius: "5px",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default App;