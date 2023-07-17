import { styled } from "styled-components";

export const OurServicesContainer = styled.div`
  width: 100%;
  background-color: rgb(51 78 59 / 75%);
  padding: 3rem 0;
`;

export const OurServicesContent = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ServicesTitle = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h2 {
    color: #fff;
  }
  hr {
    width: 5rem;
  }
  padding: 0 2rem;
  @media (max-width: 767px) {
    text-align: center;
  }
  @media (max-width: 1074px) {
    padding: 0 2rem;
  }
`;

export const OurServicesCards = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 1074px) {
    padding: 0 2rem;
  }
`;
