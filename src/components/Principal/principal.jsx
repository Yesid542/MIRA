import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './principal.css'
import LandingHeader from '../Header/header'
import LandingFooter from '../Footer/footer'
import { Link } from "react-router-dom";


function Principal (){

   useEffect(() => {
  const panels = document.querySelectorAll(".split-panel");
  const cards = document.querySelectorAll(".panorama-card");
  const stacks = document.querySelectorAll(".stack-item");
  const impacts = document.querySelectorAll(".impact-image, .impact-text")
  const teams = document.querySelectorAll(".team-card");
  const counters = document.querySelectorAll(".panorama-stats strong");

  const animateCount = (el, target) => {
    const final = Number(target);
    if (!Number.isFinite(final) || final <= 0) {
      el.textContent = (el.dataset.prefix || "") + (final || 0) + (el.dataset.suffix || "");
      return;
    }

    if (el.dataset.counted === "true") return;
    el.dataset.counted = "true";

    const duration = 1500;
    const stepTime = Math.max(16, Math.floor(duration / final)); // mínimo ~60fps
    let current = 0;

    const timer = setInterval(() => {
      current++;
      el.textContent = (el.dataset.prefix || "") + current + (el.dataset.suffix || "");
      if (current >= final) {
        clearInterval(timer);
        el.textContent = (el.dataset.prefix || "") + final + (el.dataset.suffix || "");
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // Aparición suave
        entry.target.classList.add("visible");

        // Contadores solo cuando entra la card o la sección
        if (entry.target.classList.contains("panorama-card") ||
            entry.target.classList.contains("panorama-section")) {
          counters.forEach((counter) => {
            const target = counter.dataset.target;
            animateCount(counter, target);
          });
        }
      });
    },
    { threshold: 0.2 }
  );

  panels.forEach((panel) => observer.observe(panel));
  cards.forEach((card) => observer.observe(card));
  stacks.forEach((stack) => observer.observe(stack));
  impacts.forEach((impact) => observer.observe(impact));
  teams.forEach((member)=> observer.observe(member));
  // Si quieres observar toda la sección en vez de la card, puedes dejar esta línea,
  // pero evita duplicar disparos (ya cubierto arriba con .dataset.counted)
  const section = document.querySelector(".panorama-section");
  if (section) observer.observe(section);

  return () => observer.disconnect();
}, []);


    return (
        <>
        <LandingHeader/>

        <div className="primario">
            <div className="content-primario">
              <h1 className="hero-main-title"> 
                  <strong>
                      EXPLORA LA PROVINCIA DE 
                  </strong><br />
                  <span className="gradient-text">
                  <strong>
                      LENGUPA DESDE MIRAFLORES
                  </strong>
                  </span>
              </h1>
              <div className="hero-cta-container">
                <Link to={"/registroNomada"}>
                  <button className="btn-primary" >
                    Soy Nómada Digital
                </button>
                </Link>
                <Link to={"/registroNodo"}>
                  <button className="btn-secondary">
                    Quiero ser un Nodo
                  </button>
                </Link>
              </div>
            </div>
        </div>
        <div className="section-dark">
           <section className="split-section">
              {/* Lado del Nómada */}
              <div className="split-panel nomada-panel">
                <div className="overlay"></div>
                <div className="panel-content">
                  <span className="panel-tag">Para Viajeros</span>
                  <h2>Tu oficina en la montaña</h2>
                  <p>Escapa del ruido de la ciudad. Conéctate con Starlink, disfruta del mejor clima de Boyacá y únete a una comunidad de creadores.</p>
                  <ul className="panel-list">
                    <li>✓ Internet de alta velocidad</li>
                    <li>✓ Espacios ergonómicos</li>
                    <li>✓ Experiencias locales</li>
                  </ul>
                </div>
    
                <Link to={"/ayuda#nomada"}><button className="btn-learn-more" >
                     Conoce más <span>→</span>
                 </button></Link>
              </div>

              {/* Lado del Nodo */}
              <div className="split-panel nodo-panel">
                <div className="overlay"></div>
                <div className="panel-content">
                  <span className="panel-tag">Para Anfitriones</span>
                  <h2>Transforma tu hogar</h2>
                  <p>Convierte tu finca en un centro de innovación. Recibe ingresos estables y conecta con talento global desde tu territorio.</p>
                  <ul className="panel-list">
                    <li>✓ Ingresos garantizados</li>
                    <li>✓ Equipamiento tecnológico</li>
                    <li>✓ Intercambio cultural</li>
                  </ul>
                </div>
                <Link to={"/ayuda#nodo"}><button className="btn-learn-more">
                     Conoce más <span>→</span>
                 </button></Link>
              </div>
            </section>
        </div>
        <div class="section-dark" id="sss">
           <section className="panorama-section" id="miraflores">
              <div className="panorama-overlay">
                <div className="panorama-card">
                  <span className="card-badge">El Corazón de Lengupá</span>
                  <h2>Un horizonte sin límites</h2>
                  <p>
                    A 1.432 metros de altura, el aire es más puro y las ideas fluyen mejor. 
                    Miraflores no es solo un destino, es el espacio donde el silencio de la 
                    montaña se encuentra con la velocidad del futuro.
                  </p>
                  <div className="panorama-stats">
                    <div>
                      <strong data-target="20" data-suffix="°C">0</strong>
                      <span>Promedio</span>
                    </div>
                    <div>
                      <strong data-target="3" data-suffix="h">0</strong>
                      <span>de Tunja</span>
                    </div>
                    <div>
                      <strong data-target="100" data-suffix="%">0</strong>
                      <span>Naturaleza</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panorama-overlay">
                <div className="panorama-card">
                  <span className="card-badge">Planea tu llegada</span>
                  <h2></h2>
                  <p>
                    Rutas seguras y directas para tu próximo retiro digital.
                  </p>
                  <div className="panorama-stats">
                    <div className="rutas-grid">
                      <a href="https://www.google.com/maps/dir/Bogot%C3%A1,+Bogota,+Colombia/Miraflores,+Boyaca,+Colombia/data=!4m14!4m13!1m5!1m1!19sChIJKcumLf2bP44RFDmjIFVjnSM!2m2!1d-74.072092!2d4.7109885999999994!1m5!1m1!19sChIJ4VW7Oa6Vao4RsBPUpQ4OZfA!2m2!1d-73.1443219!2d5.1954239!3e0" target="_blank" className="ruta-item">
                        <div className="ruta-info">
                          <h4>Desde Bogotá</h4>
                          <span>211 km • Aprox. 5 horas</span>
                        </div>
                        <span className="ruta-icon">📍 Abrir Mapa</span>
                      </a>
      
                      <a href="https://www.google.com/maps/dir/Tunja,+Boyaca,+Colombia/Miraflores,+Boyaca,+Colombia/data=!4m14!4m13!1m5!1m1!19sChIJW7p_iS58ao4RjKaaa37an6w!2m2!1d-73.3575572!2d5.5446422!1m5!1m1!19sChIJ4VW7Oa6Vao4RsBPUpQ4OZfA!2m2!1d-73.1443219!2d5.1954239!3e0" target="_blank" className="ruta-item">
                        <div className="ruta-info">
                          <h4>Desde Tunja</h4>
                          <span>95 km • Aprox. 3.5 horas</span>
                        </div>
                        <span className="ruta-icon">📍 Abrir Mapa</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
        <div class="section-stack">
           <section className="tech-stack" id="servicios">
              <div className="stack-header">
                <span className="stack-tag">Infraestructura y servicios</span>
                <h2>Hardware para el alto rendimiento</h2>
                <p> No adaptamos espacios, creamos estaciones de trabajo.</p>
              </div>

              <div className="stack-grid">
                {/* Item 1: Starlink */}
                <div className="stack-item">
                  <div className="stack-icon">🛰️</div>
                  <div className="stack-info">
                    <h3>Starlink Business</h3>
                    <p>Conexión satelital de baja latencia con velocidades de 150-250 Mbps. Videollamadas en 4K sin interrupciones.</p>
                    <span className="spec">Latencia: ~25ms</span>
                  </div>
                </div>

                {/* Item 2: Energía */}
                <div className="stack-item">
                  <div className="stack-icon">🔋</div>
                  <div className="stack-info">
                    <h3>Respaldo Energético</h3>
                    <p>Estaciones EcoFlow y UPS de grado empresarial. Si la luz falla en el pueblo, tu router y tu laptop siguen encendidos.</p>
                    <span className="spec">Autonomía: 4-6 horas</span>
                  </div>
                </div>

                {/* Item 3: Ergonomía */}
                <div className="stack-item">
                  <div className="stack-icon">🪑</div>
                  <div className="stack-info">
                    <h3>Ergonomía Pro</h3>
                    <p>Sillas tipo Herman Miller y escritorios de madera local con altura ajustable. Tu salud física es nuestra prioridad.</p>
                    <span className="spec">Soporte Lumbar Activo</span>
                  </div>
                </div>
          
                <div className="stack-item">
                  <div className="stack-icon">🚗</div>
                  <div className="stack-info">
                    <h3>Accesibilidad Garantizada</h3>
                    <p>Consulta con nosotros y te ayudamos a llegar</p>
                    <span className="spec">Transporte</span>
                  </div>
                </div>
                <div className="stack-item">
                  <div className="stack-icon">🛡️</div>
                  <div className="stack-info">
                    <h3>Te protegemos</h3>
                    <p>Queremos garantizar para nuestros protagonistas seguridad en cada minuto</p>
                    <span className="spec">Seguridad</span>
                  </div>
                </div>
                
              </div>
            </section>
        </div>
        <section className="social-impact" >
          <div className="impact-container">
            <div className="impact-image">
              {/* Una foto de un nómada enseñando algo en un portátil a un joven local */}
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" alt="Impacto Social Miraflores" />
              <div className="impact-badge">Impacto Real</div>
            </div>

            <div className="impact-text">
              <span className="impact-tag">Propósito Social</span>
              <h2>No eres un turista, eres un mentor</h2>
              <p>
                NODE no es solo un lugar para trabajar; es un puente de conocimiento. 
                Por cada semana de estancia, nuestros nómadas dedican <strong>1 hora </strong> 
                a compartir sus habilidades con jóvenes emprendedores de Miraflores.
              </p>

              <div className="impact-steps">
                <div className="step">
                  <span className="step-num">01</span>
                  <p>Compartes tu experiencia en tech, idiomas o negocios.</p>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <p>Inspiras a la próxima generación de la provincia.</p>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <p>Fortaleces la economía local de Lengupá.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section" id="nosotros">
          {/* Imagen de fondo del equipo completa */}
          <div className="team-background-overlay">
            <div className="team-container">
              <div className="team-header">
                <span className="team-tag">El Talento</span>
                <p>Unimos la ingeniería de software con el amor por nuestra tierra para redefinir el trabajo rural.</p>
              </div>
            
              <div className="team-grid">
                {/* Tu perfil como CEO */}
                <div className="team-card">
                  <div className="member-info">
                    <h3>Yesid Barreto</h3>
                    <span className="member-role">CEO & Lead Developer</span>
                    <p>"Programando el futuro de la provincia de Lengupá. Mi meta es que el código sea el nuevo motor de Miraflores."</p>
                    <div className="member-badge">SENA Aprendiz</div>
                  </div>
                </div>
              </div>
            
              <div className="team-vision">
                <p>Respaldado por el programa de emprendimiento del <strong>SENA</strong></p>
              </div>
            </div>
          </div>
        </section>  
      

        <LandingFooter/>
        </>

        
        

    )
}

export default Principal;