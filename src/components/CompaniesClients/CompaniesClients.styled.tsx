import { styled } from "styled-components";
import { ServicesTitle } from "../OurServices/OurServices.styled";
import {
  BannerTextContactUsButton,
  BannerTextContactUsContainer,
} from "../Banner/Banner.styled";

export const CompaniesClientsContainer = styled.div`
  overflow: hidden;
  padding: 3rem;
  img {
    width: 3rem;
  }
  .logos {
    display: flex;
    gap: 2rem;
    width: 500px;
    overflow: hidden;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 546px) {
    .logos {
      width: 150%;
      gap: 3rem;
    }
  }
`;
export const CompaniesClientsTitle = styled(ServicesTitle)`
  padding: 0 0 1rem 0;
  h2 {
    color: rgb(51 78 59 / 75%);
  }
`;

export const CompaniesClientsLogos = styled(ServicesTitle)`
  display: flex;
  flex-direction: inherit;
  padding: 2rem 0 0;
  gap: 3rem;
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  animation: 10s slide infinite linear;
  white-space: nowrap;
`;

export const CompaniesClientsContactUsContainer = styled(
  BannerTextContactUsContainer
)`
  justify-content: center;
  margin-top: 4rem;
  img {
    filter: invert(100%) sepia(13%) saturate(7458%) hue-rotate(182deg)
      brightness(112%) contrast(96%);
  }
`;

export const CompaniesClientsContactUsButton = styled(
  BannerTextContactUsButton
)`
  padding: 1rem 2.4rem;
  p {
    font-size: 1rem;
  }
`;
