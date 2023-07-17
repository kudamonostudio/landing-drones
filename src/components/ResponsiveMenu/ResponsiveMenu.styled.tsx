import { styled } from "styled-components";

export const ResponsiveMenuContainer = styled.div`
  width: 100%;
  background-color: #fff;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
  animation: fadeIn 1s;
  ul {
    transition: 5s;
    list-style: none;
    display: flex;
    flex-direction: column;
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
  @media (min-width: 930px) {
    display: none;
  }
`;
