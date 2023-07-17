import {
  ContactUsButton,
  ContactUsContainer,
  ContactUsTextIcon,
} from "./ContactUs.styled";
import Arrow from "../../../public/arrow.svg";
import Phone from "../../../public/phone-call.svg";
import Whatsapp from "../../../public/whatsapp.svg";
function ContactUs() {
  return (
    <ContactUsContainer>
      <ContactUsButton>
        <p>Contact Us</p>
        <img src={Arrow} />
      </ContactUsButton>
      <ContactUsTextIcon>
        <img src={Phone} />
      </ContactUsTextIcon>
      <ContactUsTextIcon>
        <img src={Whatsapp} />
      </ContactUsTextIcon>
      <p className="banner-text-phone-number">+ 001 222 333</p>
    </ContactUsContainer>
  );
}

export default ContactUs;
