import { NavbarContainer, NavbarContent, NavbarHamburguer, NavbarLinks } from "./Navbar.styled";
import Logo from "../../../public/logo.svg";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import { useState } from "react";

function Navbar() {

  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  const handleResponsiveMenu = () => {
    setShowResponsiveMenu(!showResponsiveMenu)
  }

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
        <img src={Logo} alt="" />
        <NavbarLinks>
          <ul>
            <a href="#our-services">Our Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#clients">Clients</a>
            <a href="http://wa.me/+64283967762" target="blank">Contact Us</a>
          </ul>
        </NavbarLinks>
        <NavbarHamburguer onClick={handleResponsiveMenu}>
        <img src="https://www.svgrepo.com/show/506246/menu-hamburger.svg" alt="" />
        </NavbarHamburguer>
        </NavbarContent>
      </NavbarContainer>
      <ResponsiveMenu show={showResponsiveMenu} />
    </>
  );
}

export default Navbar;
