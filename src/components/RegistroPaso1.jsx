function RegistroPaso1({ onNext , onBack }) {
  return (
    <div className="form-container">
      <h3 className="section-title">
        Solicitud de Autorización Temporal — Paso 1
      </h3>
      <p className="section-description">
        Complete los datos de identificación del comerciante para iniciar el
        proceso de formalización y registro.
      </p>

      {/* Barra de Progreso */}
      <div className="progress-bar-container">
        <div className="progress-bar current">1. Identificación</div>
        <div className="progress-bar">2. Actividad</div>
        <div className="progress-bar">3. Ubicación</div>
        <div className="progress-bar">4. Documentos</div>
        <div className="progress-bar">5. Finalizar</div>
      </div>

      <form className="registro-form" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend>Datos de Identificación</legend>

          {/* Tipo y Número de Documento */}
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="doc-type">Tipo de Documento</label>
              <select id="doc-type" required>
                <option value="">Seleccione</option>
                <option value="DNI">
                  DNI – Documento Nacional de Identidad
                </option>
                <option value="CE">CE – Carné de Extranjería</option>
              </select>
            </div>

            <div className="form-group half">
              <label htmlFor="doc-number">Número de Documento</label>
              <input
                type="text"
                id="doc-number"
                placeholder="Ej. 12345678"
                required
              />
              <small>
                El número debe coincidir con la identificación presentada.
              </small>
            </div>
          </div>

          {/* Nombres y Apellidos */}
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="names">Nombres</label>
              <input
                type="text"
                id="names"
                placeholder="Ej. Juan Carlos"
                required
              />
            </div>
            <div className="form-group half">
              <label htmlFor="lastnames">Apellidos</label>
              <input
                type="text"
                id="lastnames"
                placeholder="Ej. Pérez García"
                required
              />
            </div>
          </div>

          {/* Teléfono y Fecha de nacimiento */}
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="phone">Teléfono de Contacto</label>
              <input
                type="tel"
                id="phone"
                placeholder="Ej. 987654321"
                required
              />
              <small>Se utilizará para notificaciones del proceso.</small>
            </div>

            <div className="form-group half">
              <label htmlFor="dob">Fecha de Nacimiento</label>
              <input type="date" id="dob" required />
            </div>
          </div>

          {/* Dirección */}
          <div className="form-group">
            <label htmlFor="address">Dirección de Domicilio</label>
            <input
              type="text"
              id="address"
              placeholder="Ej. Jr. Parinacochas 123"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Declaración Jurada</legend>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="declaration" required />
            <label htmlFor="declaration">
              Declaro, bajo juramento, tener 18 años o más y haber ejercido
              actividad comercial ambulatoria en el distrito por un periodo
              mínimo de seis (6) meses continuos.
            </label>
          </div>
        </fieldset>

        {/* Navegación */}
        <div className="navigation-buttons">
          <button type="button" className="btn secondary-btn" onClick={onBack}>
            Anterior
          </button>

          <button type="button" className="btn primary-btn" onClick={onNext}>
            Continuar a Paso 2
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistroPaso1;
