import React from "react";
import "../index.css"; 

export default function ConsultaEstado({ onBackToHome }) {
  return (
    <div className="form-container">
      <h3 className="section-title">🔍 Consulta de Estado de Trámite</h3>
      <p className="section-description">
        Ingrese el número de su Documento de Identidad (DNI/CE) y el código de solicitud
        que recibió al finalizar el proceso para verificar su estado.
      </p>

      {/* Formulario de Consulta Simulada */}
      <form className="registro-form" onSubmit={(e) => { e.preventDefault(); alert("Simulación: Buscando trámite..."); }}>
        <fieldset>
          <legend>Datos de Consulta</legend>
          
          <div className="form-group">
            <label htmlFor="consulta-doc">Número de DNI/CE</label>
            <input
              type="text"
              id="consulta-doc"
              placeholder="Ej. 12345678"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="consulta-code">Código de Solicitud (Ej. SITFAVE-2025-A105)</label>
            <input
              type="text"
              id="consulta-code"
              placeholder="Ej. SITFAVE-2025-A105"
              required
            />
          </div>

        </fieldset>

        {/* Botones */}
        <div className="navigation-buttons" style={{ justifyContent: 'space-between' }}>
            <button type="button" className="btn secondary-btn" onClick={onBackToHome}>
                ← Volver al Inicio
            </button>
            <button type="submit" className="btn primary-btn" >
                Consultar Estado
            </button>
        </div>
      </form>
    </div>
  );
}