function RegistroPaso5({ onStartAgain, puestoId }) {
  return (
    <div className="form-container">
      <h3 className="section-title" style={{ color: 'var(--success-color)' }}>
        ¡Solicitud de Autorización Temporal Finalizada con Éxito!
      </h3>
      <p className="section-description">
        Su proceso de formalización ha concluido. A continuación, se muestra el resumen y la
        confirmación de su nuevo puesto de venta.
      </p>

      {/* Barra de Progreso Completa */}
      <div className="progress-bar-container">
        <div className="progress-bar completed">1. Identificación</div>
        <div className="progress-bar completed">2. Actividad</div>
        <div className="progress-bar completed">3. Ubicación</div>
        <div className="progress-bar completed">4. Documentos</div>
        <div className="progress-bar current">5. Finalizar</div>
      </div>

      <fieldset>
        <legend>Confirmación de Formalización</legend>
        <div style={{ padding: '20px', backgroundColor: '#e8f5e9', border: '1px solid var(--success-color)', borderRadius: '6px', textAlign: 'left' }}>
          <h4>🎉 Puesto Asignado y Autorización en Proceso</h4>
          <p>
            Su nuevo Puesto Temporal de Venta ha sido asignado con el código: <strong>{puestoId}</strong>.
          </p>
          <p>
            Recibirá su <strong>Permiso Digital</strong> (con el Código QR de geolocalización) en el correo electrónico y por SMS en un plazo de <strong>24 horas hábiles</strong>, luego de la verificación de los documentos.
          </p>
          <p>
            <strong>¡Felicidades! Usted es ahora un comerciante formalizado.</strong>
          </p>
        </div>
      </fieldset>

      {/* Botones de acción */}
      <div className="navigation-buttons" style={{ justifyContent: 'center' }}>
        <button type="button" className="btn primary-btn" onClick={onStartAgain}>
          Volver a Inicio
        </button>
      </div>
    </div>
  );
}

export default RegistroPaso5;