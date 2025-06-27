import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/About.css'; // Usa el mismo archivo o crea uno nuevo si prefieres
import responsabilidadImg from '../assets/Persona.png'; // Asegúrate de tener esta imagen
import '@fortawesome/fontawesome-free/css/all.min.css';


function Responsabilidad() {
  return (
<div id="about-responsabilidad">
  {/* Sección 1 */}
  <div className="about-container1">
    <div className="about-text">
      <h2>Especialistas en Equipos para la Industria Gastronómica</h2>

           <p>En Servitec somos una empresa con más de 30 años de experiencia brindando soluciones técnicas a cocinas industriales, restaurantes, hoteles y comedores institucionales.</p>
      <p>Contamos con un equipo de técnicos certificados, capacitados constantemente por fabricantes de maquinaria gastronómica de alta gama, lo que nos permite ofrecer un servicio de alta calidad y precisión.</p>
    </div>
    <div className="about-image">
      <img src={responsabilidadImg} alt="Responsabilidad social empresarial" />
    </div>
  </div>

  {/* Sección 2 - solo texto */}
  <div className="about-container2">
    <div className="about-text">
      <h2>Soluciones Técnicas Confiables para tu Cocina Industrial</h2>
      <p>En Servitec, nos especializamos en brindar servicios técnicos diseñados para mantener tu operación gastronómica siempre en marcha. Nuestra prioridad es que tus equipos funcionen al 100% con el menor tiempo de inactividad posible.</p>
      <p>Gracias a nuestro enfoque en la eficiencia, tiempos de respuesta rápidos y uso exclusivo de refacciones originales, cientos de clientes en toda Colombia confían en nosotros para mantener sus cocinas productivas y seguras.</p>
      <p>Ya sea que necesites una instalación desde fábrica, mantenimiento preventivo o soluciones a fallas críticas, nuestro equipo está listo para ayudarte con compromiso, conocimiento técnico y responsabilidad.</p>
    </div>
  </div>

  {/* Sección 3 - imagen a la izquierda */}
  <div className="services-icons-section">
  <h2 className="section-title">Nuestros Servicios</h2>
  <div className="services-grid">

    {/* Servicio 1 */}
    <div className="service-card">
      <div className="icon">
        <i className="fas fa-tools"></i>
      </div>
      <h3>Instalación Profesional</h3>
      <p>Montaje técnico de equipos industriales con estándares de fábrica y seguridad.</p>
    </div>

    {/* Servicio 2 */}
    <div className="service-card">
      <div className="icon">
        <i className="fas fa-cogs"></i>
      </div>
      <h3>Mantenimiento Técnico</h3>
      <p>Prevención, diagnóstico y corrección de fallas para asegurar alto rendimiento.</p>
    </div>

    {/* Servicio 3 */}
    <div className="service-card">
      <div className="icon">
        <i className="fas fa-shield-alt"></i>
      </div>
      <h3>Pólizas de Servicio</h3>
      <p>Planes programados que garantizan continuidad operativa y tranquilidad.</p>
    </div>

    {/* Servicio 4 (opcional) */}
    <div className="service-card">
      <div className="icon">
        <i className="fas fa-box-open"></i>
      </div>
      <h3>Refacciones Originales</h3>
      <p>Repuestos garantizados para maximizar la vida útil de tus equipos.</p>
    </div>

  </div>
</div>

  {/* Botón */}
  <div className="btn">
    <button><NavLink to="/servitecolombia/contact">Contactanos!!</NavLink></button>
  </div>
</div>

  );
}

export default Responsabilidad;
