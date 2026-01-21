import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import './registroN.css';
import { supabase } from '../../supabaseClient';
import { Link } from "react-router-dom";

function RegistroNomada (){
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    portafolio: '',
    interes_social: 'dev'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Enviamos los datos a la tabla 'nomadas' de Supabase
    const { data, error } = await supabase
      .from('nomadas')
      .insert([
        { 
          nombre: formData.full_name, 
          correo: formData.email, 
          url: formData.portafolio, 
          social: formData.interes_social
        }
      ]);

    if (error) {
      alert("Error al registrar: " + error.message);
    } else {
      alert("¡Registro exitoso! Bienvenido a la red NODE.");
      // Aquí podrías limpiar el formulario o redirigir
    }
  }
    return(
    <div className="nomad-auth-container">
      <div className="nomad-image-side">
        <div className="logoR"> <Link to={"/"}> <strong>MIRA</strong></Link></div>
        <div className="image-overlay-content">
          <h1>Tu oficina te está esperando.</h1>
          <p>Únete a la primera comunidad de nómadas en el corazón de Boyacá, inscribete y se parte de nuestro exito - MIRA</p>
        </div>
      </div>

      <div className="nomad-form-side">
        <div className="form-wrapper">
          <span className="form-badge">¡Comencemos!</span>
          <h2>Inscribete aquí</h2>

          <form className="nomad-split-form" onSubmit={handleSubmit}>
            <div className="input-row">
              <label>Nombre Completo</label>
              <input type="text" placeholder="Ej. Juan Valdés" onChange={(e) => setFormData({...formData, full_name: e.target.value})} required />
            </div>

            <div className="input-row">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="hola@mundo.com" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            </div>

            <div className="input-row">
              <label>Perfil de Linkedin</label>
              <input type="url" placeholder="https://www.micuentaln.com.co" onChange={(e) => setFormData({...formData, portafolio: e.target.value})} required />
            </div>

            <div className="input-row">
              <label>¿Te gustaría dar una charla técnica a jóvenes locales?</label>
              <select value={formData.specialty} onChange={(e) => setFormData({...formData,  interes_social: e.target.value })}>
                <option value="si">Sí, me encantaría aportar</option>
                <option value="tal vez">Tal vez, depende del tiempo</option>
                <option value="no">Prefiero solo trabajar</option>
              </select>
            </div>

            <button type="submit" className="btn-nomad-primary">
              Comenzar ahora
            </button>
          </form>
          
          <p className="login-footer">¿Ya tienes cuenta? <a href="#">Inicia sesión</a></p>
        </div>
      </div>
    </div>
        
    )
}

export default RegistroNomada;