import {
  BannerContainer,
  BannerImage,
  BannerText,
  BannerTextContent,
  BannerTextContactUsButton,
  BannerTextContactUsContainer,
  BannerTextContactUsIconsAndNumber,
} from "./Banner.styled";
import Arrow from "../../../public/arrow.svg";
import Phone from "../../../public/phone-call.svg";
import Whatsapp from "../../../public/whatsapp.svg";
import { BannerTextIcon } from "./Banner.styled";
import { Fade } from "react-awesome-reveal";
import Video from "../../assets/banner-video.mp4"

const whatsappCall = () => window.open("http://wa.me/+64283967762");

function Banner() {
  return (
    <BannerContainer>
      <BannerImage>
        <video src={Video} autoPlay loop muted/>
      </BannerImage>
      <BannerTextContent>
        <BannerText>
          <Fade
            direction="left"
            fraction={0.2}
            triggerOnce={true}
            cascade={true}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h1>
              We venture where others cannot, redefining the possibilities
            </h1>
            <p>Setting the standard in drone deliveries for over 10 years</p>
            <BannerTextContactUsContainer>
              <BannerTextContactUsButton onClick={whatsappCall}>
                <p>Contact Us</p>
                <img src={Arrow} />
              </BannerTextContactUsButton>
              <BannerTextContactUsIconsAndNumber>
                <BannerTextIcon>
                  <img src={Phone} onClick={whatsappCall} />
                </BannerTextIcon>
                <BannerTextIcon>
                  <img src={Whatsapp} onClick={whatsappCall} />
                </BannerTextIcon>
                <p className="banner-text-phone-number" onClick={whatsappCall}>
                  +64 28 396 7762
                </p>
              </BannerTextContactUsIconsAndNumber>
            </BannerTextContactUsContainer>
          </Fade>
        </BannerText>
      </BannerTextContent>
    </BannerContainer>
  );
}

export default Banner;
