function RegistroPaso2({ onBack, onNext }) {
  return (
    <div className="form-container">
      <h3 className="section-title">Solicitud de Autorización Temporal — Paso 2</h3>
      <p className="section-description">
        Registre la información correspondiente a la actividad comercial que desea formalizar.
      </p>

      {/* Barra de Progreso */}
      <div className="progress-bar-container">
        <div className="progress-bar completed">1. Identificación</div>
        <div className="progress-bar current">2. Actividad</div>
        <div className="progress-bar">3. Ubicación</div>
        <div className="progress-bar">4. Documentos</div>
        <div className="progress-bar">5. Finalizar</div>
      </div>

      <form className="registro-form">
        <fieldset>
          <legend>Información de la Actividad</legend>

          {/* Rubro */}
          <div className="form-group">
            <label htmlFor="rubro">Rubro Principal</label>
            <select id="rubro" required>
              <option value="">Seleccione el rubro</option>
              <option value="Alimentos">Comidas y Bebidas Preparadas</option>
              <option value="Servicios">Servicios Menores (llaves, costura, etc.)</option>
              <option value="Artesanías">Artesanía / Manufactura</option>
              <option value="RopaAccesorios">Venta de Ropa y Accesorios</option>
              <option value="Otros">Otros</option>
            </select>
          </div>

          {/* Descripción */}
          <div className="form-group">
            <label htmlFor="description">Descripción de Productos/Servicios</label>
            <textarea
              id="description"
              rows="3"
              placeholder="Describa brevemente lo que comercializa..."
              required
            ></textarea>
            <small>Máximo: 200 caracteres.</small>
          </div>

          {/* Tipo de puesto y turno */}
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="puesto-type">Tipo de Puesto</label>
              <select id="puesto-type" required>
                <option value="">Seleccione</option>
                <option value="Carreta">Carreta o módulo móvil</option>
                <option value="Triciclo">Triciclo</option>
                <option value="Manta">Manta (venta en piso)</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="form-group half">
              <label htmlFor="operacion-tiempo">Horario Propuesto</label>
              <select id="operacion-tiempo" required>
                <option value="">Seleccione</option>
                <option value="Mañana">6:00 a.m. – 2:00 p.m.</option>
                <option value="Tarde">2:00 p.m. – 10:00 p.m.</option>
                <option value="Completo">Turno Completo (máx. 8 horas)</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Condiciones</legend>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="sanidad" required />
            <label htmlFor="sanidad">
              Me comprometo a tramitar el <strong>Carné de Sanidad Municipal</strong> en caso de realizar
              actividades de preparación o manipulación de alimentos.
            </label>
          </div>
        </fieldset>

        {/* Navegación */}
        <div className="navigation-buttons">
          <button type="button" className="btn secondary-btn" onClick={onBack}>
            Anterior
          </button>
          <button type="button" className="btn primary-btn" onClick={onNext}>
            Continuar a Paso 3
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistroPaso2;
