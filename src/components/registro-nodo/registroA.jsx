import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import './registroA.css';
import { Link } from "react-router-dom";
import { supabase } from '../../supabaseClient';

function RegistroNodo (){
   const [formData, setFormData] = useState({
      full_name: '',
      place_name: '',
      capacity: 'one'
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Enviamos los datos a la tabla 'nomadas' de Supabase
      const { data, error } = await supabase
        .from('Nodo')
        .insert([
          { 
            nombre: formData.full_name, 
            ubicacion: formData.place_name, 
            capacidad: formData.capacity 
          }
        ]);
        if (error) {
      alert("Error al registrar: " + error.message);
    } else {
      alert("¡Registro exitoso! Bienvenido a la red MIRA.");
      // Aquí podrías limpiar el formulario o redirigir
    }
      }
    return(
    <div className="host-auth-container">
      {/* MINI HEADER SOLO LOGO */}
      <header className="auth-mini-header">
        
        <a href="/" className="back-link">Volver al inicio</a>
      </header>

      {/* LADO IZQUIERDO: FORMULARIO */}
      <div className="host-form-side">
        <div className="host-form-wrapper">
          <span className="host-badge">Anfitriones</span>
          <h2>Tu tierra, el próximo HUB digital</h2>

          <form className="host-split-form" onSubmit={handleSubmit}>
            <div className="host-input-group">
              <label>Nombre del Propietario</label>
              <input type="text" placeholder="Ej. Luis Rodríguez" onChange={(e) => setFormData({...formData, full_name: e.target.value})} required />
            </div>

            

            <div className="host-input-group">
              <label>Vereda / Ubicación</label>
              <input type="text" placeholder="Ej. Vereda Suna Abajo" onChange={(e) => setFormData({...formData, place_name: e.target.value})} required />
            </div>

            <div className="host-input-group">
              <label>Capacidad de Huéspedes</label>
              <select value={formData.capacity} onChange={(e) => setFormData({...formData,  capacity: e.target.value })}>
                <option value={"one"}>1 Nómada</option>
                <option value={"Two"}>2 Nómadas</option>
                <option value={"Three"}>Grupo pequeño (3-5)</option>
              </select>
            </div>

            <button type="submit" className="btn-host-primary">
              Postular mi propiedad
            </button>
          </form>

          <p className="auth-footer-text">
            Al registrarte, aceptas nuestros <a className="terminos" href="#">Términos de Socio</a>.
          </p>
        </div>
      </div>

      {/* LADO DERECHO: IMAGEN (En este caso la puse a la derecha para variar) */}
      <div className="host-image-side">
        <div className="host-image-overlay">
          <h3>"Regístrate y descubre cómo transformar tu propiedad en un espacio de innovación."</h3>
         
        </div>
      </div>
    </div>
    )
}

export default RegistroNodo;