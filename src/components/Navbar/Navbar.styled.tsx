import { styled } from "styled-components";

export const NavbarContent = styled.div`
  max-width: 1080px;
  height: 6rem;
  margin: 0 auto;
  img {
    width: 11rem;
    height: auto;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    gap: 1rem;
    padding: 0.8rem;
  }
`;

export const NavbarContainer = styled.div`
  background: white;
`;

export const NavbarLinks = styled.div`
  height: max-content;
  margin-right: 4rem;
  ul {
    list-style: none;
    display: flex;
    gap: 3rem;
    font-size: 1.1rem;
    a {
      text-decoration: none;
      color: #1c2f27;
    }
    a:first-of-type {
      font-weight: 600;
    }
    a:visited {
      color: #1c2f27;
    }
    a:hover {
      color: #2f3648;
      font-weight: 600;
      font-size: 1.1rem;
    }
  }
  @media (max-width: 930px) {
    display: none;
  }
`;

export const NavbarHamburguer = styled.div`
  cursor: pointer;
  padding: 0 1rem;
  height: 100%;
  img {
    width: 2.5rem;
    filter: invert(23%) sepia(9%) saturate(1654%) hue-rotate(85deg)
      brightness(97%) contrast(83%);
  }
  display: none;
  @media (max-width: 930px) {
    display: flex;
  }
`;
