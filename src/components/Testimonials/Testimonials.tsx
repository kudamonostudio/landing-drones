import { ServicesTitle } from "../OurServices/OurServices.styled";
import {
  TestimonialsCardsContainer,
  TestimonialsContainer,
} from "./Testimonials.styled";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import { AppContainer } from "../../App";
import { Fade } from "react-awesome-reveal";

function Testimonials() {
  return (
    <TestimonialsContainer id="testimonials">
      <AppContainer>
        <ServicesTitle>
          <p>
            <small>Testimonials</small>
          </p>
          <h2>Customer Feedback and Experiences</h2>
          <hr />
        </ServicesTitle>
        <TestimonialsCardsContainer>
          <Fade direction="up" fraction={0.2} triggerOnce={true} cascade={true} className="fade">
            <TestimonialsCard
              text={
                "Their high-quality aerial shots have allowed me to showcase the scale and unique features of our real estate developments. The videos they created are cinematic and captivating, providing potential buyers with a compelling visual experience. SkyVision has proven to be an invaluable partner in our marketing efforts."
              }
              name="Emily - Emerald City Properties COO "
              img="https://variety.com/wp-content/uploads/2016/01/linda-yaccarino.jpg?w=1000&h=563&crop=1"
            />
            <TestimonialsCard
              text={
                "Our partnership with SkyVision Delivery Solutions has revolutionized our supply chain logistics. Their drone delivery service is incredibly efficient and reliable. We have seen a significant reduction in delivery times, which has allowed us to improve customer satisfaction and streamline our operations."
              }
              name="James - Global Retailers CEO"
              img="https://www.tvbeurope.com/wp-content/uploads/2023/07/Sonny-Sandel-726x807.png"

            />
            <TestimonialsCard
              text={
                "SkyVision has transformed our pharmaceutical supply chain. Their secure and reliable drone delivery service has allowed us to expedite critical medical supplies to remote locations, ensuring timely delivery and saving lives. The team at SkyVision is highly responsive, accommodating our specific requirements with precision."
              }
              name="Sophie - PharmaLife COO"
              img="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/accountants/web/images/natalie-bruns-moving-to-online-video-dtm-qbo-us-en-desktop@2x.jpg"
            />
          </Fade>
        </TestimonialsCardsContainer>
      </AppContainer>
    </TestimonialsContainer>
  );
}

export default Testimonials;
