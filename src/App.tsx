import { styled } from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AirConditioner from "./components/AirConditioner/AirConditioner";
import OurServices from "./components/OurServices/OurServices";
import Testimonials from "./components/Testimonials/Testimonials";
import IntegralServices from "./components/IntegralServices/IntegralServices";
import CompaniesClients from "./components/CompaniesClients/CompaniesClients";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import { Fade } from "react-awesome-reveal";

export const AppContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <OurServices />
      <AppContainer>
        <Fade direction="right" fraction={0.2} triggerOnce={true} cascade={true}>
          <AirConditioner />
          <IntegralServices />
        </Fade>
      </AppContainer>
      <Testimonials />
      <CompaniesClients />
      <Map />
      <Footer />
    </>
  );
}

export default App;
