import { Navbar } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
import Logo from '../../img/logo.png'
import './style.css'

const NavbarSgl = () => {
  const handleActiveMenu = () => {
    const menu = document.getElementById('menu-list')
    menu.classList.toggle('hidden')
  }
  return (
    <>
      <Navbar
        fluid={false}
        rounded={true}
        className="relative shadow-sm text-[#767676] z-10"
      >
        <Navbar.Brand>
          <NavLink to='/'>
            <img
              src={Logo}
              className="mr-3 w-[124px]"
              alt="CLP Logo"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id='menu-list'>
          <li className='max-lg:p-2 flex items-center justify-center' style={{margin: '0'}}> 
            <NavLink onClick={handleActiveMenu} className={({ isActive }) => (isActive ? 'activeNavItem shadow-lg' : '') + ' h-full flex justify-center items-center hover:bg-white hover:h-[350%] hover:text-clp-purple hover:shadow-lg p-5 pb-8 rounded-b-full max-md:p-4 max-md:rounded-full max-md:w-full transition-all'} to="/"><span className='self-end'>Inicio</span></NavLink>
          </li>
          <li className='max-lg:p-2 flex items-center justify-center' style={{margin: '0'}}> 
            <NavLink onClick={handleActiveMenu} className={({ isActive }) => (isActive ? 'activeNavItem shadow-lg' : '') + ' h-full flex justify-center items-center hover:bg-white hover:h-[350%] hover:text-clp-purple hover:shadow-lg p-5 pb-8 rounded-b-full max-md:p-4 max-md:rounded-full max-md:w-full transition-all'} to="/nosotros"><span className='self-end'>Nosotros</span></NavLink>
          </li>
          <li className='max-lg:p-2 flex items-center justify-center' style={{margin: '0'}}> 
            <NavLink onClick={handleActiveMenu} className={({ isActive }) => (isActive ? 'activeNavItem shadow-lg' : '') + ' h-full flex justify-center items-center hover:bg-white hover:h-[350%] hover:text-clp-purple hover:shadow-lg p-5 pb-8 rounded-b-full max-md:p-4 max-md:rounded-full max-md:w-full transition-all'} to="/servicios"><span className='self-end'>Servicios</span></NavLink>
          </li>
          <li className='max-lg:p-2 flex items-center justify-center' style={{margin: '0'}}> 
            <NavLink onClick={handleActiveMenu} className={({ isActive }) => (isActive ? 'activeNavItem shadow-lg' : '') + ' h-full flex justify-center items-center hover:bg-white hover:h-[350%] hover:text-clp-purple hover:shadow-lg p-5 pb-8 rounded-b-full max-md:p-4 max-md:rounded-full max-md:w-full transition-all'} to="/contacto"><span className='self-end'>Contacto</span></NavLink>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarSgl