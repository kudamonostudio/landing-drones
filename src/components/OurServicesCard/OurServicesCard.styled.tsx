import { styled } from "styled-components";

export const OurServicesCardContainer = styled.div`
  background-color: white;
  padding: 0.5rem 1rem;
  width: fit-content;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const OurServicesCardLogoContainer = styled.div`
  height: 5rem;
  background-color: #feb60f;
  width: 5rem;
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    filter: invert(100%) sepia(13%) saturate(7458%) hue-rotate(182deg)
      brightness(112%) contrast(96%);
    width: 3rem;
  }
  padding: 1rem;
`;
