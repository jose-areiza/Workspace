const servicios = [
  {
    icono: '⚡',
    titulo: 'Instalaciones residenciales',
    descripcion: 'Instalamos sistemas eléctricos seguros para hogares nuevos y remodelaciones.',
  },
  {
    icono: '🏢',
    titulo: 'Instalaciones comerciales',
    descripcion: 'Soluciones eléctricas para oficinas, locales y empresas.',
  },
  {
    icono: '🔧',
    titulo: 'Mantenimiento preventivo',
    descripcion: 'Detectamos y solucionamos fallas antes de que se conviertan en problemas graves.',
  },
  {
    icono: '💡',
    titulo: 'Iluminación LED',
    descripcion: 'Modernizamos espacios con iluminación LED eficiente y elegante.',
  },
  {
    icono: '🔋',
    titulo: 'Plantas eléctricas y UPS',
    descripcion: 'Instalación y mantenimiento de sistemas de respaldo energético.',
  },
  {
    icono: '🌐',
    titulo: 'Redes de voz y datos',
    descripcion: 'Cableado estructurado y redes para hogares y empresas.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>

          <p className="section-subtitulo text-muted">
            Ofrecemos soluciones eléctricas modernas, seguras y certificadas
            para hogares, negocios y empresas en Medellín.
          </p>
        </div>

        <div className="row g-4">

          {servicios.map((servicio, index) => (
            <div key={index} className="col-md-6 col-lg-4">

              <div className="card h-100 border-0 shadow-sm">

                <div className="card-body p-4">

                  <div style={{ fontSize: '2.5rem' }}>
                    {servicio.icono}
                  </div>

                  <h5 className="card-title fw-bold mt-3">
                    {servicio.titulo}
                  </h5>

                  <p className="card-text text-muted">
                    {servicio.descripcion}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;