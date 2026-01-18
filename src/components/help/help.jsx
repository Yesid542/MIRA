import React from 'react';
import { Link } from 'react-router-dom';
import './help.css';

const Ayuda = () => {
  return (
    <div className="ayuda-container">
      {/* HEADER DE NAVEGACIÓN */}
      <nav className="ayuda-nav">
        <Link to="/" className="back-btn">← Volver al inicio</Link>
        <div className="ayuda-logo">MIRA <span>Iniciativa</span></div>
      </nav>

      {/* HERO DE INFORMACIÓN */}
      <header className="ayuda-hero">
        <h1>Centro de Conocimiento MIRA</h1>
        <p>Entiende cómo estamos transformando el campo a través de la tecnología y la hospitalidad.</p>
      </header>

      <main className="ayuda-content">
        
        {/* SECCIÓN 1: LA INICIATIVA */}
        <section className="ayuda-section">
          <h2>Nuestra Visión</h2>
          <p>
            MIRA nace en Miraflores, Boyacá, con un propósito claro: eliminar la brecha entre el talento digital global y la riqueza del campo colombiano. No somos una agencia de viajes, somos un sistema de <strong>Descentralización del Trabajo</strong>.
          </p>
          <div className="impact-grid">
            <div className="impact-item">
              <h4>Conectividad Satelital</h4>
              <p>Llevamos Starlink a zonas rurales para garantizar productividad 24/7.</p>
            </div>
            <div className="impact-item">
              <h4>Economía Circular</h4>
              <p>El 70% de los ingresos va directamente al propietario local.</p>
            </div>
            <div className="impact-item">
              <h4>Seguridad 360.</h4>
              <p>Tu tranquilidad es nuestra prioridad .</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: PARA NÓMADAS */}
        <section className="ayuda-section" id='nomada'>
          <h2>Para el Nómada Digital</h2>
          <div className="faq-item">
            <h3>¿Qué garantiza MIRA?</h3>
            <p>Garantizamos un espacio de trabajo con internet de baja latencia, silla ergonómica, suministro eléctrico estable y un entorno de paz absoluta.</p>
          </div>
          <div className="faq-item">
            <h3>¿Cómo llego a Miraflores?</h3>
            <p>Contamos con guías de transporte privado y rutas detalladas desde Bogotá (5h) y Tunja (3.5h).</p>
          </div>
          <div className="faq-item">
            <h3>¿Lo que garantizamos?</h3>
            <ul>
              <li>Conectividad de Élite: Internet satelital Starlink de baja latencia. Olvida los cortes en tus reuniones de Zoom o las esperas para subir archivos pesados.</li>
              <li>Ergonomía Real: No trabajarás en una mesa de comedor. Cada nodo cuenta con una silla profesional y un escritorio diseñado para largas jornadas.</li>
              <li>Inspiración de Origen: Despierta con el aroma del mejor café de Lengupá y termina tu jornada con una caminata por senderos boyacenses.</li>
              <li>Impacto con Propósito: Al elegir MIRA, no solo alquilas una habitación; estás inyectando capital directamente en la economía de una familia campesina y compartiendo tu conocimiento con jóvenes locales.</li>
            </ul>
          </div>
        </section>
        <section className="ayuda-section" id='nodo'>
          <h2>Para el Nodo o anfitrión</h2>
          <div className="faq-item">
            <h3>Tu finca, un activo global</h3>
            <p>El objetivo aquí es vender progreso, respeto y rentabilidad.</p>
          </div>
          <div className="faq-item">
            <h3>Convierte tu hogar en un Nodo de innovación</h3>
            <p>Tienes una habitación disponible y un entorno envidiable; nosotros ponemos la tecnología y los clientes. MIRA es la plataforma que permite a los propietarios rurales de Miraflores competir en el mercado turístico internacional.</p>
          </div>
          <div className="faq-item">
            <h3>¿Por qué ser un Nodo?</h3>
            <ul>
              <li>Rentabilidad Superior: Gana hasta un 300% más que con un arriendo tradicional, recibiendo profesionales de alto perfil que valoran y respetan tu propiedad.</li>
              <li>Trato Justo (70/30): Tú eres el dueño del activo. Por eso, el 70% de cada reserva es para ti. MIRA solo cobra el 30% por la gestión, el marketing y el soporte tecnológico.</li>
              <li>Modernización sin Costo: Te ayudamos a equipar tu espacio con la mejor tecnología (internet y mobiliario) para asegurar que tu oferta sea de clase mundial.</li>
              <li>Orgullo Mirafloerense: Sé parte del movimiento que está poniendo a nuestro municipio en el mapa tecnológico de Colombia.</li>
            </ul>
          </div>
        </section>

        {/* SECCIÓN 3: PARA EL MUNICIPIO (IMPACTO SOCIAL) */}
        <section className="ayuda-section highlight">
          <h2>Impacto en Miraflores</h2>
          <p>
            Cada nómada que llega a MIRA se convierte en un mentor potencial. Fomentamos el intercambio de conocimientos:
          </p>
          <ul>
            <li>Talleres gratuitos de programación y diseño para jóvenes locales.</li>
            <li>Digitalización de los pequeños comercios del municipio.</li>
            <li>Promoción del café especial de Lengupá al mercado internacional.</li>
          </ul>
        </section>

      </main>

      <footer className="ayuda-footer">
        <p>© 2025 MIRA - De Miraflores para el mundo.</p>
      </footer>
    </div>
  );
};

export default Ayuda;