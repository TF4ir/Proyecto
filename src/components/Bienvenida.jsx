import React from "react";
import "../index.css";

export default function Bienvenida({ onStart, onConsultar, onNormativa }) {
  return (
    <div className="app-container">
      <header className="header">
        <h1>🇵🇪 SITFAVE</h1>
        <h2>
          Sistema Integral de Formalización de Vendedores Ambulantes
        </h2>
      </header>

      <main className="main-content">
        <section className="welcome-section">
          <h3>¡Bienvenido al Proceso de Formalización Municipal!</h3>
          <p>
            Este sistema te guiará a través de los pasos necesarios para obtener tu{" "}
            <strong>Autorización Municipal Temporal</strong>
          </p>

          <blockquote>
            <strong>
              Proceso acorde a las normas de gestión y control del comercio
              ambulatorio de la Municipalidad Metropolitana de Lima.
            </strong>
          </blockquote>
        </section>

        <section className="options-section">
          <h3>¿Qué desea realizar?</h3>

          <div className="button-group">

            <button className="btn primary-btn" onClick={onStart}>
              Iniciar Solicitud de Formalización
              <span className="icon">➡️</span>
            </button>

            <button
              className="btn secondary-btn"
              onClick={onConsultar}
            >
              Consultar Estado de Trámite
              <span className="icon">🔍</span>
            </button>

            <button
              className="btn info-btn"
              onClick={onNormativa}
            >
              Ver Requisitos y Normativa (TUPA)
              <span className="icon">📄</span>
            </button>

          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Municipalidad de la Victoria - Gerencia de Desarrollo Económico
        </p>
      </footer>
    </div>
  );
}
