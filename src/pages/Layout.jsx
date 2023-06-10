import { Tooltip } from "flowbite-react";
import { Outlet } from "react-router-dom";
import FooterClp from "../components/FooterClp";
import NavbarClp from "../components/NavbarClp";
import imgws from '../img/icons/whatsapp.png'

const Layout = () => {
  return (
    <>
      <a href="https://wa.me/523380000800?text=Estoy%20interesado.%20Float" className="float flex justify-center items-center" target="_blank" rel="noreferrer">
        <Tooltip
          content="Whatsapp"
          placement="right"
          className="left-24"
        >
          <img src={imgws} className="w-8 ml-[3px]" alt="wsicon" />
        </Tooltip>
      </a>
      <NavbarClp />
        <Outlet />
      <FooterClp/>
    </>
  )
};

export default Layout;