import { OurServicesCards, OurServicesContainer, OurServicesContent, ServicesTitle } from "./OurServices.styled";
import { AppContainer } from "../../App";
import OurServicesCard from "../OurServicesCard/OurServicesCard";
import { Fade } from "react-awesome-reveal";

function OurServices() {
  return (
    <OurServicesContainer id="our-services">
      <AppContainer>
        <OurServicesContent>
        <Fade direction="up" fraction={0.2} triggerOnce={true}>
          <ServicesTitle>
              <h2>Our Services</h2>
              <hr />
          </ServicesTitle>
          </Fade>
          <Fade direction="up" fraction={0.2} triggerOnce={true}>
          <OurServicesCards>
          <OurServicesCard title="Aerial photography and videography" icon="https://www.svgrepo.com/show/301580/video-camera.svg"/>
          <OurServicesCard title="Delivery Drone Service" icon="https://www.svgrepo.com/show/425569/delivery-box-present.svg"/>
          </OurServicesCards>
          </Fade>
        </OurServicesContent>
      </AppContainer>
    </OurServicesContainer>
  );
}

export default OurServices;
