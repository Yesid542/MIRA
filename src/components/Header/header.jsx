import React from "react";
import { useNavigate } from "react-router-dom";
import './header.css'
import { Link } from "react-router-dom";
function Header() {

  const [open, setOpen] = React.useState(false);


          window.addEventListener("scroll", function() {
        const header = document.querySelector("header");

        if (window.scrollY > 10) { // Apenas se baja un poco (≈1 cm)
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
    });

    
    return(
        <header className={open ? "head head-open" : "head head-closed"}>
            <div className="logo">
                <h1 className="log">MIRA</h1>
            </div>
            <button className="menu-toggle" onClick={() => setOpen(!open)}>
              ☰
            </button>
            <div className={open ? " responsivo nav-open" : "responsivo nav-closed"}>
              <nav>
                  <ul className=" nav-son" >
                      <li><a className="navegar" href="/">Inicio</a></li>
                      <li><a className="navegar" href="#miraflores">Miraflores</a></li>
                      <li><a className="navegar" href="#servicios">Servicios</a></li>
                      <li><a className="navegar" href="#nosotros">Nosotros</a></li>

                  </ul>


              </nav>
              <div className="nav-actions-right">

                  <Link to={"/ayuda"}><strong className="ayuda" >?</strong></Link>

                  <button className="btn-login-minimal">
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="icon-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Entrar
                  </button>
              </div>
            </div>
        </header>
    )
}

export default Header;