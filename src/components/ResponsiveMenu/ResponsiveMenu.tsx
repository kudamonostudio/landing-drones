import { ResponsiveMenuContainer } from "./ResponsiveMenu.styled";

interface ResponsiveMenuProps {
  show: boolean
}

function ResponsiveMenu({ show }: ResponsiveMenuProps) {
  return (
    <>
    {
       show && 
       <ResponsiveMenuContainer>
        <ul className={show ? 'isShown' : ''}>
          <a href="#our-services">Our Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#clients">Clients</a>
          <a href="http://wa.me/+64283967762" target="blank">
            Contact Us
          </a>
        </ul>
      </ResponsiveMenuContainer>
    }
    </>
  )
}

export default ResponsiveMenu;
