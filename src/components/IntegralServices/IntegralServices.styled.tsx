import { styled } from "styled-components";
import { ServicesTitle } from "../OurServices/OurServices.styled";

export const IntegralServiceContainer = styled.div`
  position: relative;
  padding: 1rem 2rem 2rem;
  .service-header-desktop{
    display: none;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  @media (min-width: 767px) {
    .service-header-desktop{
    display: block;
    margin-bottom: 2rem;
    height: 21rem;
  }
  .service-header-mobile, .service-footer-mobile{
    display: none;
  }
  }
`;

export const IntegralServiceHeader = styled.div`
  width: 100%;
  @media (min-width: 767px) {
    display: flex;
    img{
      width: 50%;
    }
  }
`;

export const IntegralServiceText = styled.div`
`;

export const IntegralServiceTitle = styled(ServicesTitle)`
  h3 {
    color: #2f3648
  }
  margin: 0 0 2rem;
  margin-top: 1rem;
  padding: initial;
  @media (min-width: 767px) {
    margin: 2rem 0
  }
`;

export const IntegralServiceTextList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
  p{
    margin-top: 0.2rem;
  }
`;
