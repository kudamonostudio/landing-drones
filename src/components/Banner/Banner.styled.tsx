import { styled } from "styled-components";

export const BannerContainer = styled.div`
  height: 50rem;
  width: 100%;
  display: flex;
  justify-content: right;
  position: relative;
`;

export const BannerImage = styled.div`
  height: 50rem;
  width: 100%;
  position: absolute;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }
  @media (max-width: 520px) {
    img {
      object-position: -40rem 0rem;
    }
  }
`;

export const BannerTextContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 auto;
  max-width: 1080px;
  display: flex;
  align-items: center;
`;

export const BannerText = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50rem;
  img {
    width: 2.5rem;
    filter: invert(73%) sepia(92%) saturate(1432%) hue-rotate(347deg)
      brightness(101%) contrast(104%);
  }
  .banner-text-phone-number {
    margin-left: 1rem;
  }
  @media (max-width: 767px) {
    max-width: 100%;
    align-items: flex-start;
  }
  @media (max-width: 1074px) {
    padding: 0 2rem;
  }
`;

export const BannerTextContactUsButton = styled.div`
  cursor: pointer;
  width: fit-content;
  border-radius: 100px;
  padding: 1rem 3rem;
  background-color: #feb60f;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  img {
    filter: invert(100%) sepia(13%) saturate(7458%) hue-rotate(182deg)
      brightness(112%) contrast(96%);
    margin-top: 0.3rem;
  }
  @media (max-width: 767px) {
    img {
      display: none;
    }
  }
`;

export const BannerTextIcon = styled.div`
cursor: pointer;
  width: 5rem;
  height: 5rem;
  border-radius: 80px;
  padding: 1rem;
  background-color: white;
  color: #feb60f;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 2.5rem;
  }
  @media (max-width: 767px) {
    width: 3rem;
    height: 3rem;
    img {
      width: 1.8rem;
    }
  }
`;

export const BannerTextContactUsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 3rem;
  p{
    cursor: pointer;
  }
  @media (max-width: 767px) {
    flex-direction: inherit;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const BannerTextContactUsIconsAndNumber = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
