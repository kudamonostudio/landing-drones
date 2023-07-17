import {
  CompaniesClientsContactUsButton,
  CompaniesClientsContactUsContainer,
  CompaniesClientsContainer,
  CompaniesClientsLogos,
  CompaniesClientsTitle,
} from "./CompaniesClients.styled";
import Arrow from "../../../public/arrow.svg";

function CompaniesClients() {
  const whatsappCall = () => window.open("http://wa.me/+64283967762");

  return (
    <CompaniesClientsContainer id="clients">
      <CompaniesClientsTitle>
        <h2>Trusted by leading companies</h2>
        <hr />
      </CompaniesClientsTitle>
      <div className="logos">
      <CompaniesClientsLogos>
        <img src="https://www.svgrepo.com/show/303137/airbnb-2-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303338/xiaomi-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303638/eos-3-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303209/litecoin-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303420/cardano-logo.svg" alt="" />
      </CompaniesClientsLogos>
      <CompaniesClientsLogos>
        <img src="https://www.svgrepo.com/show/303137/airbnb-2-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303338/xiaomi-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303638/eos-3-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303209/litecoin-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303420/cardano-logo.svg" alt="" />
      </CompaniesClientsLogos>
      <CompaniesClientsLogos>
        <img src="https://www.svgrepo.com/show/303137/airbnb-2-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303338/xiaomi-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303638/eos-3-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303209/litecoin-logo.svg" alt="" />
        <img src="https://www.svgrepo.com/show/303420/cardano-logo.svg" alt="" />
      </CompaniesClientsLogos>
      </div>
      <CompaniesClientsContactUsContainer>
      <CompaniesClientsContactUsButton onClick={whatsappCall}>
        <p>Contact Us</p>
        <img src={Arrow} />
      </CompaniesClientsContactUsButton>
      </CompaniesClientsContactUsContainer>
      
    </CompaniesClientsContainer>
  );
}

export default CompaniesClients;
