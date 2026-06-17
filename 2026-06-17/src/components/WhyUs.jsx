const razones = [
  {
    icono: '🏆',
    titulo: 'Técnicos certificados',
    descripcion: 'Nuestro equipo cuenta con certificación RETIE y experiencia profesional.',
  },
  {
    icono: '⏰',
    titulo: 'Atención rápida',
    descripcion: 'Respondemos solicitudes y emergencias en menos de 24 horas.',
  },
  {
    icono: '🛠️',
    titulo: 'Garantía de calidad',
    descripcion: 'Todos nuestros trabajos tienen garantía y materiales de alta calidad.',
  },
  {
    icono: '💬',
    titulo: 'Asesoría personalizada',
    descripcion: 'Brindamos soluciones adaptadas a las necesidades de cada cliente.',
  },
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">

        <div className="row align-items-center g-5">

          <div className="col-lg-5">

            <img
              src="https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec"
              alt="Técnicos de VoltTec trabajando"
              className="img-fluid rounded shadow"
            />

          </div>

          <div className="col-lg-7">

            <h2 className="section-titulo mb-3">
              ¿Por qué elegirnos?
            </h2>

            <p className="text-muted">
              VoltTec lleva más de 15 años ofreciendo soluciones eléctricas
              residenciales y comerciales en Medellín y el Área Metropolitana.
            </p>

            <p className="text-muted mb-4">
              Trabajamos con hogares, oficinas, empresas y negocios,
              garantizando seguridad, calidad y cumplimiento de normas RETIE.
            </p>

            <ul className="list-unstyled">

              {razones.map((razon, index) => (
                <li key={index} className="d-flex gap-3 mb-3">

                  <span style={{ fontSize: '1.5rem' }}>
                    {razon.icono}
                  </span>

                  <div>

                    <strong>{razon.titulo}</strong>

                    <p className="text-muted mb-0 small">
                      {razon.descripcion}
                    </p>

                  </div>

                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyUs;