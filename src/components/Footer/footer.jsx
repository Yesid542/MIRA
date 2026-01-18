import React from "react";
import { useNavigate } from "react-router-dom";
import './footer.css'

function Footer() {
    
    return(
        <footer className="footer">
          <div className="footer-container">
            {/* Columna 1: Marca y Propósito */}
            <div className="footer-column brand-col">
              <div className="footer-logo">
                <span className="logo-dot"></span> MIRA
              </div>
              <p>Transformando la Provincia de Lengupá en el primer ecosistema de talento digital y vida rural en Colombia.</p>
              <div className="social-links">
                {/* Aquí irán tus links de "Building in Public" */}
                <a href="https://www.linkedin.com/in/wilman-yesid-barreto-avila-9a1b71246/" aria-label="LinkedIn">LN</a>
                <a href="https://www.instagram.com/yesid_barretto/" aria-label="Instagram">IG</a>
                <a href="" aria-label="Facebook">FB</a>
              </div>
            </div>

            {/* Columna 2: Navegación Rápida */}
            <div className="footer-column">
              <h4>Plataforma</h4>
              <ul>
                <li><a href="#nomadas">Soy Nómada</a></li>
                <li><a href="#nodos">Quiero ser Nodo</a></li>
                <li><a href="#tech">Infraestructura</a></li>
                <li><a href="#equipo">Nuestro Equipo</a></li>
              </ul>
            </div>

            {/* Columna 3: Soporte y Contacto */}
            <div className="footer-column">
              <h4>Contacto</h4>
              <ul>
                <li>Miraflores, Boyacá</li>
                <li>yesidbarreto24@gmail.com</li>
                <a href="https://wa.me/573027250829?text=Hola%20Yesid,%20quiero%20más%20información" className="whatsapp-link">
                  <span className="wa-icon">●</span> WhatsApp Soporte
                </a>
              </ul>
            </div>

            {/* Columna 4: Respaldo Institucional */}
            <div className="footer-column sena-col">
              <h4>Respaldo</h4>
              <div className="sena-logo-placeholder">
                <p>Proyecto en Formulación</p>
                <strong>SENA - Fondo Emprender</strong>
              </div>
              <p className="location-tag">Hecho con 💚 en Miraflores</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 MIRA. Todos los derechos reservados.</p>
            <div className="footer-legal">
              <a href="#">Términos y Condiciones</a>
              <a href="#">Privacidad</a>
            </div>
          </div>
        </footer>
    )
}

export default Footer;