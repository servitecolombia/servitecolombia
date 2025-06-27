import { NavLink } from 'react-router-dom'
import '../styles/Home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  return (
      <div className='container-hero'>
        <div id="hero">
          <h1>Servitec</h1>
          <p>Comprometidos con el correcto funcionamiento de tus equipos, somo una emporesa especializada en
              comprometidos con un servicio eficaz y responsable</p>
            <div className="btn">
              <button><NavLink to="/servitecolombia/contact">Contactanos ya!!</NavLink></button>
            </div>
        </div>
        <div id="somos-proya">
          <div class="container">
            <div class="img-container1"></div>
            <div class="texto">
                <h2>¿Por qué los clientes nos prefieren?</h2>
                <p>Contamos con más de 30 años de experiencia brindando soluciones técnicas confiables a la industria gastronómica, lo que nos posiciona como una empresa líder en el sector.</p>
                <p>Gracias a nuestro crecimiento continuo, actualmente disponemos de más de 20 centros de servicio ubicados estratégicamente en todo México, lo que nos permite tener siempre un equipo de profesionales cerca de ti.</p>
            </div>
          </div>
          <div class="container">
            <div class="texto">
                <h2>SOMOS UNA EMPRESA SOCIALMENTE RESPONSABLE</h2>
                <p>Uno de los pilares de nuestra filosofía empresarial es asumir un compromiso genuino con la sociedad, procurar el bienestar de nuestros colaboradores y fomentar la unión familiar.</p>
                <p>Fieles a estos valores y comprometidos con generar un impacto positivo en las comunidades donde tenemos presencia, en Serv Industrial contamos con el distintivo de Empresa Socialmente Responsable.</p>
            </div>
            <div class="img-container"></div>
          </div>
          <div className="btn">
            <button><NavLink to="/servitecolombia/about">About</NavLink></button>
          </div>
        </div>
       <div id="nuestros-programas">
  <div className="container">
    <h2>Nuestros Servicios Técnicos</h2>
    <p>En Servitec brindamos soluciones completas para mantener tus equipos gastronómicos funcionando con máxima eficiencia y durabilidad.</p>
    
    <div className="programas">

      {/* Servicio 1 */}
      <div className="carta">
        <div className="icono-servicio">
          <i className="fas fa-tools"></i>
        </div>
        <h3>Instalación profesional de equipos</h3>
        <p>Instalamos maquinaria industrial directamente desde fábrica, garantizando rendimiento y seguridad desde el primer uso.</p>
      </div>

      {/* Servicio 2 */}
      <div className="carta">
        <div className="icono-servicio">
          <i className="fas fa-screwdriver-wrench"></i>
        </div>
        <h3>Mantenimiento preventivo y técnico</h3>
        <p>Diagnosticamos y damos mantenimiento periódico o correctivo para prevenir fallas y asegurar el rendimiento continuo.</p>
      </div>

      {/* Servicio 3 */}
      <div className="carta">
        <div className="icono-servicio">
          <i className="fas fa-file-contract"></i>
        </div>
        <h3>Planes y pólizas de mantenimiento</h3>
        <p>Ofrecemos contratos de servicio programado para maximizar la vida útil de tus equipos y reducir paros inesperados.</p>
      </div>

    </div>
  </div>
</div>

      </div>
  )
}

export default Home