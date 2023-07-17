import IntegralServiceTextListCard from "./IntegralServiceTextListCard/IntegralServiceTextListCard";
import {
  IntegralServiceContainer,
  IntegralServiceHeader,
  IntegralServiceText,
  IntegralServiceTextList,
  IntegralServiceTitle,
} from "./IntegralServices.styled";
import { Fade } from "react-awesome-reveal";

function IntegralServices() {
  return (
    <IntegralServiceContainer>
      <IntegralServiceText>
        <IntegralServiceTitle>
          <small>delivery</small>
          <h3>
          Delivery Drone Service
          </h3>
          <hr />
        </IntegralServiceTitle>
        <IntegralServiceHeader className="service-header-mobile">
        <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_637413968_20001349200092804_264706.jpg" />
        
      </IntegralServiceHeader>
        <IntegralServiceHeader className="service-header-desktop">
          <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_637413968_20001349200092804_264706.jpg" />
          <img src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2022-02/dronedelivery.jpg?itok=qDJ38vYx" />
        </IntegralServiceHeader>
        <IntegralServiceTextList>
        <Fade direction="left" fraction={0.2} triggerOnce={true} cascade={true}>
          
        <IntegralServiceTextListCard
            icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            text="Direct and shorter routes can be considered for air deliveries, thus saving a significant amount of time for you and your company"
          />
          <IntegralServiceTextListCard
            icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            text="Using a delivery vehicle is costly. But the operational charges with drones are lesser than the vehicles. So, it will reduce costs"
          />
          <IntegralServiceTextListCard
            icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            text="It becomes easier to get in touch with harsh terrains and remote regions such as mountains, hills, and jungles"
          />

          <IntegralServiceTextListCard
            icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            text="It lowers the carbon footprints because it reduces the consumption of energy"
          />
          </Fade>
        </IntegralServiceTextList>
      </IntegralServiceText>
      <Fade direction="left" fraction={1} triggerOnce={true}>
      <img src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2022-02/dronedelivery.jpg?itok=qDJ38vYx" className="service-footer-mobile"/>
      </Fade>
    </IntegralServiceContainer>
  );
}

export default IntegralServices;
