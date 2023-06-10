import { Footer } from 'flowbite-react'
import Logo from '../../img/logo-white.png'
import ico_facebook from '../../img/icons/facebook.png'
import ico_twitter from '../../img/icons/gorjeo.png'
import ico_insta from '../../img/icons/instagram.png'
import ico_pinterest from '../../img/icons/logotipo-de-pinterest.png'
import ico_youtube from '../../img/icons/youtube.png'
import './style.css'
import { NavLink } from 'react-router-dom'

const FooterClp = () => {
  return (
    <Footer container={true} className="px-4 py-10 clp-footer font-light">
        <div className="w-full text-center container">
            <div className="w-full flex gap-8 justify-between items-center max-lg:flex-col">
            <div className='w-[300px]'>
              <NavLink to='/' className='clp-logo'>
                <Footer.Brand
                  className='clp-logo'
                  src={Logo}
                  alt="CJP Logo"
                />
              </NavLink>
              <p className='font-thin text-xs mt-4'>"En CJP Telecom te ofrecemos soluciones inteligentes de conectividad, enlace, movilidad y seguridad electrónica que tú y tu empresa necesitan para su desarrollo tecnológico, a través de nuestro personal certificado a nivel internacional; respaldado por su alto conocimiento y más de 20 años de experiencia"</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
              <h1 className='text-white font-bold'>Enlaces Útiles</h1>
              <Footer.LinkGroup className='gap-4 grid grid-cols-2 text-left max-lg:grid-cols-1'>
                  <a href="https://telefoneame.com.mx" target="_blank" rel='noreferrer'>
                  https://telefoneame.com.mx
                  </a>
                  <a href="https://tienda.cjp.mx" target="_blank" rel='noreferrer'>
                  https://tienda.cjp.mx
                  </a>
                  <a href="https://ubiquiti.cjp.mx" target="_blank" rel='noreferrer'>
                  https://ubiquiti.cjp.mx
                  </a>
                  <a href="https://tienda.cjp.mx/blog" target="_blank" rel='noreferrer'>
                  https://tienda.cjp.mx/blog
                  </a>
                  <a href="https://bagatella.mx" target="_blank" rel='noreferrer'>
                  https://bagatella.mx
                  </a>
              </Footer.LinkGroup>
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
              <Footer.LinkGroup className='gap-4'>
                  <NavLink to='/'>
                  Inicio
                  </NavLink>
                  <NavLink to='/nosotros'>
                  Nosotros
                  </NavLink>
                  <NavLink to='/servicios'>
                  Servicios
                  </NavLink>
                  <NavLink to='/contacto'>
                  Contacto
                  </NavLink>
              </Footer.LinkGroup>
              <div>
              <h1 className='text-white mb-4 mt-2 font-bold'>Redes Sociales</h1>
              <Footer.LinkGroup className='gap-4'>
                <a href="https://www.facebook.com/CJPTelecom" target="_blank" rel='noreferrer'>
                  <img src={ico_facebook} alt="ico_facebook" className='w-10'/>
                </a>
                <a href="https://www.twitter.com/CJPTelecom" target="_blank" rel='noreferrer'>
                  <img src={ico_twitter} alt="ico_twitter" className='w-10'/>
                </a>
                <a href="https://www.instagram.com/CJPTelecom" target="_blank" rel='noreferrer'>
                  <img src={ico_insta} alt="ico_insta" className='w-10'/>
                </a>
                <a href="https://www.pinterest.com/CJPTelecom" target="_blank" rel='noreferrer'>
                  <img src={ico_pinterest} alt="ico_pinterest" className='w-10'/>
                </a>
                <a href="https://www.youtube.com/CJPTelecom" target="_blank" rel='noreferrer'>
                  <img src={ico_youtube} alt="ico_youtube" className='w-10'/>
                </a>
              </Footer.LinkGroup>
              </div>
            </div>
            </div>
            <Footer.Divider/>
            <Footer.Copyright
              href="#"
              by="CJP TELECOM"
              year={2022}
            />
        </div>
    </Footer>
  )
}

export default FooterClp