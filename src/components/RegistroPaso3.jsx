function RegistroPaso3({ onBack, onNext }) {
  return (
    <div className="form-container">
      <h3 className="section-title">Solicitud de Autorización Temporal — Paso 3</h3>
      <p className="section-description">
        Seleccione la zona disponible donde desea realizar su actividad comercial.
      </p>

      {/* Barra de Progreso */}
      <div className="progress-bar-container">
        <div className="progress-bar completed">1. Identificación</div>
        <div className="progress-bar completed">2. Actividad</div>
        <div className="progress-bar current">3. Ubicación</div>
        <div className="progress-bar">4. Documentos</div>
        <div className="progress-bar">5. Finalizar</div>
      </div>

      <form className="registro-form">
        <fieldset>
          <legend>Zona de Ubicación</legend>

          <div className="form-group">
            <label htmlFor="zona">Seleccione Zona Permitida</label>
            <select id="zona" required>
              <option value="">Seleccione</option>
              <option value="Av. Aviación — Zona 1">
                Av. Aviación — Sector 1 (Comercio Variado)
              </option>
              <option value="Av. Aviación — Zona 2">
                Av. Aviación — Sector 2 (Ambulantes Preexistentes)
              </option>
              <option value="Mercado La Uni">
                Mercado La Unión — Perímetro Externo
              </option>
              <option value="Parque Cánepa — Lado Oeste">
                Parque Cánepa — Lado Oeste
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="referencia">Referencia Exacta</label>
            <input
              id="referencia"
              type="text"
              placeholder="Especifique calle, cuadra o punto cercano..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="motivo">Justificación Breve</label>
            <textarea
              id="motivo"
              rows="3"
              placeholder="Explique por qué esta ubicación es adecuada..."
              required
            ></textarea>
          </div>
        </fieldset>

        {/* Navegación */}
        <div className="navigation-buttons">
          <button type="button" className="btn secondary-btn" onClick={onBack}>
            Anterior
          </button>
          <button type="button" className="btn primary-btn" onClick={onNext}>
            Continuar a Paso 4
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistroPaso3;
