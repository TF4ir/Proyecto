// src/App.jsx

import React, { useState } from "react";
import Bienvenida from "./components/Bienvenida"; // Debes crear este archivo
import RegistroPaso1 from "./components/RegistroPaso1";
import RegistroPaso2 from "./components/RegistroPaso2";
import RegistroPaso3 from "./components/RegistroPaso3";
import RegistroPaso4 from "./components/RegistroPaso4";
import RegistroPaso5 from "./components/RegistroPaso5";
import Header from "./components/Header"; // Si los creaste
import Footer from "./components/Footer"; // Si los creaste
import "./index.css"; // Estilos globales

// Define los estados de la vista
const VISTAS = {
  INICIO: "inicio",
  PASO_1: "paso1",
  PASO_2: "paso2",
  PASO_3: "paso3",
  PASO_4: "paso4",
  PASO_5: "paso5",
  // ... puedes añadir más pasos: 'paso3', 'finalizado'
};

function App() {
  // 1. Definimos el estado actual de la vista, iniciando en 'inicio'
  const [vistaActual, setVistaActual] = useState(VISTAS.INICIO);

  const [datosFormulario, setDatosFormulario] = useState({
    puestoId: 'AV-A1-105', // Ejemplo de ID de puesto asignado
    // Aquí puedes agregar más datos del formulario si es necesario
  });

  const handlePaso4Next = () => {
      // **Simulación de Asignación/Procesamiento**: Aquí podrías aplicar la lógica algorítmica.
      // Por ahora, usamos el ID mock definido.
      setDatosFormulario({ puestoId: 'AV-A1-105' }); 
      setVistaActual(VISTAS.PASO_5);
  }

  // 2. Función para renderizar el componente correcto
  const renderContent = () => {
    switch (vistaActual) {
      case VISTAS.INICIO:
        return (
          // Pasamos la función que cambia de vista al botón principal de Bienvenida
          <Bienvenida onStart={() => setVistaActual(VISTAS.PASO_1)} />
        );

      case VISTAS.PASO_1:
        return (
          <RegistroPaso1
            onBack={() => setVistaActual(VISTAS.INICIO)}
            onNext={() => setVistaActual(VISTAS.PASO_2)}
          />
        );

      case VISTAS.PASO_2:
        return (
          <RegistroPaso2
            onBack={() => setVistaActual(VISTAS.PASO_1)}
            onNext={() => setVistaActual(VISTAS.PASO_3)}
          />
        );

      case VISTAS.PASO_3:
        return (
          <RegistroPaso3
            onBack={() => setVistaActual(VISTAS.PASO_2)}
            onNext={() => setVistaActual(VISTAS.PASO_4)}
          />
        );
      
      case VISTAS.PASO_4:
        return (
          <RegistroPaso4
            onBack={() => setVistaActual(VISTAS.PASO_3)}
            onNext={() => handlePaso4Next()} // --> Ejecuta la lógica simulada y va a Paso 5
          />
        );
        
      case VISTAS.PASO_5: 
        return (
          <RegistroPaso5 
            puestoId={datosFormulario.puestoId}
            onStartAgain={() => setVistaActual(VISTAS.INICIO)}
          />
        );


      default:
        return <Bienvenida onStart={() => setVistaActual(VISTAS.PASO_1)} />;
    }
  };

  return (
    <div className="app-container">
      {/* Si tienes componentes Header y Footer, úsalos aquí */}
      <Header />

      <main className="main-content">{renderContent()}</main>

      <Footer />
    </div>
  );
}

export default App;
