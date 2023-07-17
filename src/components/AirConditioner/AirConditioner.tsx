import IntegralServiceTextListCard from "../IntegralServices/IntegralServiceTextListCard/IntegralServiceTextListCard";
import {
  AirConditionerContainer,
  AirConditionerContent,
  AirConditionerHeader,
  AirConditionerText,
  AirConditionerTextList,
  AirConditionerTitle,
} from "./AirConditioner.styled";
import { Fade } from "react-awesome-reveal";
import DroneGif from "../../../src/assets/drone.gif";

function AirConditioner() {
  return (
    <AirConditionerContainer>
      <AirConditionerText>
        <AirConditionerTitle>
          <small>videography</small>
          <h3>Aerial photography and videography</h3>
          <hr />
        </AirConditionerTitle>
        <AirConditionerContent>
          <AirConditionerHeader>
            <img src={DroneGif} width={480} height={240.0} />
          </AirConditionerHeader>
          <AirConditionerTextList>
            <Fade
              direction="left"
              fraction={0.2}
              triggerOnce={true}
              cascade={true}
            >
              <IntegralServiceTextListCard
                icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
                text="Time and Productivity: Drones allow for quick and efficient image capture. There is no need to set up large crews or spend a lot of time on preparation. This saves time and increases productivity on the filming set."
              />
              <IntegralServiceTextListCard
                icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
                text="Safety: Utilizing drones eliminates the need for operators to be in dangerous or hard-to-reach locations to obtain certain shots. This reduces risks and enhances safety for both operators and the talents involved"
              />
              <IntegralServiceTextListCard
                icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
                text="Planning and Previsualization: Before a shoot, drones can be used to explore the environment and get an overview of the location. This aids in shot planning and allows for visualizing how sequences will look in the project's context"
              />

              <IntegralServiceTextListCard
                icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
                text="Creativity and Narrative: The ability to capture aerial images provides filmmakers and photographers with a wide range of creative options. Dynamic camera movements and aerial shots can enhance the narrative and visual aesthetics of a production"
              />
            </Fade>
          </AirConditionerTextList>
        </AirConditionerContent>
      </AirConditionerText>
    </AirConditionerContainer>
  );
}

export default AirConditioner;
