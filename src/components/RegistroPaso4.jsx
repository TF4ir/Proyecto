function RegistroPaso4({ onBack, onNext }) {
  // Simulación de puesto asignado (Mock Data)
  // El ID se usa como ejemplo y se pasará al paso final
  const puestoAsignado = {
    id: "AV-A1-105", 
    zona: "Av. Aviación — Sector 1",
    referencia: "Frente a Tienda 123, cerca a la esquina con Jr. Gamarra",
    coordenadas: "12°04'34.3''S 77°01'23.5''W",
    mapImageUrl: "Images\\map-mock.png", // RUTA MOCK DE LA IMAGEN
  };

  return (
    <div className="form-container">
      <h3 className="section-title">
        Solicitud de Autorización Temporal — Paso 4: Ubicación y Documentos
      </h3>
      <p className="section-description">
        ¡El sistema ha procesado la solicitud! A continuación, se muestra el puesto asignado y la
        fase final de carga de documentos requeridos.
      </p>

      {/* Barra de Progreso: Actualizado a 5 pasos */}
      <div className="progress-bar-container">
        <div className="progress-bar completed">1. Identificación</div>
        <div className="progress-bar completed">2. Actividad</div>
        <div className="progress-bar completed">3. Ubicación</div>
        <div className="progress-bar current">4. Documentos</div>
        <div className="progress-bar">5. Finalizar</div>
      </div>

      <fieldset>
        <legend>Puesto Asignado (Simulación de Reubicación)</legend>
        <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9', textAlign: 'left' }}>
          <h4>✅ Puesto Temporal Sugerido/Reservado: <strong>{puestoAsignado.id}</strong></h4>
          <p>
            <strong>Zona:</strong> {puestoAsignado.zona}
          </p>
          <p>
            <strong>Referencia:</strong> {puestoAsignado.referencia}
          </p>
          {/* Visualización de la imagen simulada del mapa */}
          <div style={{ margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden' }}>
            <img 
              src={puestoAsignado.mapImageUrl} 
              alt="Mapa de Ubicación Asignada" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <p style={{ margin: '5px', fontSize: '0.8em', color: '#666', textAlign: 'center' }}>
                Vista simulada de la zona {puestoAsignado.zona} con su puesto marcado.
            </p>
          </div>
        </div>
      </fieldset>

      <form className="registro-form" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend>Carga de Documentos</legend>
          {/* Campos de carga de archivos simulados */}
          <div className="form-group">
            <label htmlFor="doc-dni">
              1. Copia de DNI o Carné de Extranjería (PDF o JPG)
            </label>
            <input type="file" id="doc-dni" required />
          </div>
          <div className="form-group">
            <label htmlFor="doc-sanidad">
              2. Carné de Sanidad (Obligatorio para rubros de Alimentos)
            </label>
            <input type="file" id="doc-sanidad" />
          </div>
          <div className="form-group">
            <label htmlFor="doc-dj">
              3. Declaración Jurada de Cumplimiento de Normativa
            </label>
            <input type="file" id="doc-dj" required />
          </div>
        </fieldset>

        {/* Navegación */}
        <div className="navigation-buttons">
          <button type="button" className="btn secondary-btn" onClick={onBack}>
            Anterior
          </button>
          <button type="button" className="btn primary-btn" onClick={onNext}>
            Continuar a Paso 5
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistroPaso4;