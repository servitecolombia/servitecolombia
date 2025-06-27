import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css'


const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 19.4326,
  lng: -99.1332
};

function Contact() {
  return (
    <div>
      <div id="hero-contactos">
        <h1>Contactanos</h1>
      </div>
      <div className="contact-container">

        <div className="contact-text">
          <h2>¿Por qué contactarnos?</h2>
          <p>En Serv Industrial entendemos lo crucial que es mantener tus equipos operando sin interrupciones. Por eso, nuestro equipo de atención está preparado para ofrecerte respuestas rápidas, soluciones efectivas y orientación experta en cada paso.</p>
          <p>Ya sea que necesites asesoría técnica, mantenimiento especializado o una cotización personalizada, estamos listos para ayudarte con el profesionalismo que nos caracteriza.</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-description">
          <h2>Comunícate con confianza</h2>
          <p>Contamos con más de 30 años de experiencia respaldando a la industria gastronómica, y sabemos lo importante que es tener un soporte técnico cercano, confiable y humano.</p>
          <p>Al comunicarte con nosotros recibirás atención personalizada, seguimiento oportuno y soluciones enfocadas en tus necesidades. ¡Estamos para ayudarte!</p>
        </div>


        <div className="contact-links">
          <h2><FaPhoneAlt className="icon" /> +57 300 4101870</h2>
          <h2><FaEnvelope className="icon" /> servitecolombia273@gmail.com</h2>

          <div style={{ fontSize: '2rem', display: 'flex', gap: '1rem' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" style={{ color: '#3b5998' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" style={{ color: '#C13584' }} />
            </a>
            <a href="https://wa.me/+573004101870" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon" style={{ color: '#25D366' }} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="maps">
        <LoadScript googleMapsApiKey="TU_API_KEY_AQUI">
          <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}

export default Contact