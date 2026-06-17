import { useState } from 'react';

function Contact() {

  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = () => {
    if (formulario.nombre && formulario.email) {
      setEnviado(true);
    }
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="section-titulo text-white">
            Contáctenos
          </h2>

          <p className="text-light opacity-75">
            Solicita una cotización y recibe asesoría profesional para tu proyecto eléctrico.
          </p>

        </div>

        <div className="row g-5">

          <div className="col-lg-4">

            <h4 className="mb-4">
              Información de contacto
            </h4>

            <ul className="list-unstyled">

              <li className="mb-3">
                📍 Calle 10 # 43A-15, Medellín
              </li>

              <li className="mb-3">
                📞 (300) 123-4567
              </li>

              <li className="mb-3">
                📧 info@volttec.com.co
              </li>

              <li className="mb-3">
                🕐 Lun–Vie 7am–6pm
              </li>

            </ul>

          </div>

          <div className="col-lg-8">

            <div className="bg-white text-dark rounded-3 p-4">

              <div className="row g-3">

                <div className="col-md-6">

                  <label htmlFor="nombre" className="form-label fw-semibold">
                    Nombre completo
                  </label>

                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    placeholder="Tu nombre"
                    value={formulario.nombre}
                    onChange={(e) =>
                      setFormulario({
                        ...formulario,
                        nombre: e.target.value
                      })
                    }
                  />

                </div>

                <div className="col-md-6">

                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="correo@email.com"
                    value={formulario.email}
                    onChange={(e) =>
                      setFormulario({
                        ...formulario,
                        email: e.target.value
                      })
                    }
                  />

                </div>

                <div className="col-md-6">

                  <label htmlFor="telefono" className="form-label fw-semibold">
                    Teléfono
                  </label>

                  <input
                    type="text"
                    id="telefono"
                    className="form-control"
                    placeholder="3001234567"
                    value={formulario.telefono}
                    onChange={(e) =>
                      setFormulario({
                        ...formulario,
                        telefono: e.target.value
                      })
                    }
                  />

                </div>

                <div className="col-md-6">

                  <label htmlFor="servicio" className="form-label fw-semibold">
                    Tipo de servicio
                  </label>

                  <select
                    id="servicio"
                    className="form-select"
                    value={formulario.servicio}
                    onChange={(e) =>
                      setFormulario({
                        ...formulario,
                        servicio: e.target.value
                      })
                    }
                  >

                    <option value="">
                      Selecciona un servicio
                    </option>

                    <option value="residencial">
                      Instalación residencial
                    </option>

                    <option value="comercial">
                      Instalación comercial
                    </option>

                    <option value="mantenimiento">
                      Mantenimiento
                    </option>

                    <option value="led">
                      Iluminación LED
                    </option>

                    <option value="ups">
                      UPS y plantas eléctricas
                    </option>

                  </select>

                </div>

                <div className="col-12">

                  <label htmlFor="mensaje" className="form-label fw-semibold">
                    Mensaje
                  </label>

                  <textarea
                    id="mensaje"
                    className="form-control"
                    rows="4"
                    placeholder="Describe tu necesidad..."
                    value={formulario.mensaje}
                    onChange={(e) =>
                      setFormulario({
                        ...formulario,
                        mensaje: e.target.value
                      })
                    }
                  ></textarea>

                </div>

                <div className="col-12">

                  <button
                    className="btn btn-voltec w-100 py-2"
                    onClick={manejarEnvio}
                  >
                    Enviar solicitud
                  </button>

                </div>

                {enviado && (

                  <div className="alert alert-success mt-3">

                    ✅ Gracias {formulario.nombre}, te contactaremos pronto.

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;