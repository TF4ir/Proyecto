import React from "react";
import "../index.css"; 

export default function NormativaTUPA({ onBackToHome }) {
  return (
    <div className="form-container">
      <h3 className="section-title">📄 Requisitos y Normativa (TUPA)</h3>
      <p className="section-description">
        Esta información se basa en las normas de gestión del comercio ambulatorio de la
        Municipalidad Metropolitana de Lima, relevantes para el distrito de La Victoria.
      </p>

      <fieldset>
        <legend>Marco Legal y Requisitos Clave</legend>
        
        <h4>Objetivo del Sistema (SITFAVE)</h4>
        <p>
            El sistema busca reducir la informalidad y mejorar el ordenamiento del comercio
            ambulatorio, digitalizando el registro de comerciantes y la emisión de permisos electrónicos.
        </p>

        <h4>Requisitos Mínimos para la Formalización (Simulados)</h4>
        <ul>
          <li>Tener 18 años o más y contar con DNI/CE vigente.</li>
          <li>Haber ejercido actividad comercial en el distrito por un mínimo de <strong>seis (6) meses continuos.</strong></li>
          <li>Comprometerse a tramitar el <strong>Carné de Sanidad Municipal</strong> si manipula alimentos.</li>
          <li>Aceptar la ubicación del puesto asignada por el sistema georreferenciado para contribuir al <strong>Ordenamiento Urbano.</strong></li>
          <li>El proceso de formalización es un requisito para obtener la <strong>Autorización Municipal Temporal.</strong></li>
        </ul>

        <h4>Normativa de Referencia</h4>
        <p>
            El proceso se alinea con las normas de gestión y control del comercio ambulatorio de la Municipalidad Metropolitana de Lima.
        </p>
      </fieldset>

      {/* Botones */}
      <div className="navigation-buttons" style={{ justifyContent: 'flex-start' }}>
          <button type="button" className="btn secondary-btn" onClick={onBackToHome}>
              ← Volver al Inicio
          </button>
      </div>
    </div>
  );
}