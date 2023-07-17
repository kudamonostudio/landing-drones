import { styled } from "styled-components";

export const ContactUsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 3rem;
  img{
    width: 3rem;
    height: auto;
  }
`

export const ContactUsTextIcon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 80px;
  padding: 1rem;
  background-color: #000073;
  color: #feb60f;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 2.5rem;
    filter: invert(100%) sepia(13%) saturate(7458%) hue-rotate(182deg) brightness(112%) contrast(96%);
  }
`;

export const ContactUsButton = styled.div`
  cursor: pointer;
  width: fit-content;
  border-radius: 100px;
  padding: 1rem;
  background-color: #000073;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  img{
    filter: invert(100%) sepia(13%) saturate(7458%) hue-rotate(182deg) brightness(112%) contrast(96%);
    width: 1.5rem;
    margin-top: 0.2rem;
  }
  p{
    font-size: 1rem;
  }
`;