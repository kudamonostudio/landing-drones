import { styled } from "styled-components";
import { ServicesTitle } from "../OurServices/OurServices.styled";

export const AirConditionerContainer = styled.div`
  position: relative;
  padding: 2rem 2rem 0;
  img {
    width: 100%;
  }
  @keyframes levitation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-25px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const AirConditionerHeader = styled.div`
  width: 100%;
  margin-top: 5rem;
  img {
    animation: levitation 2s infinite;
    width: inherit;
    height: auto;
  }
  position: relative;
  img {
  }
  @media (min-width: 1074px) {
    img {
      object-position: initial;
      margin-top: 1rem;
      width: 40rem;
      height: auto;
      object-fit: cover;
      position: absolute;
      right: -8rem;
      top: 2rem;
    }
  }
`;

export const AirConditionerText = styled.div``;

export const AirConditionerTitle = styled(ServicesTitle)`
  h3 {
    color: #2f3648;
  }
  margin-top: 1rem;
  padding: initial;
`;

export const AirConditionerTextList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
  p {
    margin-top: 0.2rem;
  }
  @media (min-width: 767px) {
    padding: 2rem;
  }
`;

export const AirConditionerContent = styled.div`
  @media (min-width: 1145px) {
    display: flex;
    margin-top: 1rem;
    width: 100%;
  }
`;
