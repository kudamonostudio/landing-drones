import { styled } from "styled-components";

export const TestimonialsCardContainer = styled.div`
  background-color: white;
  width: 20rem;
  border-radius: 0.5rem;
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  p {
    font-size: 1rem;
  }
  @media (min-width: 480px) {
    width: 100%;
  }
`;

export const TestimonialsQuotesContainer = styled.div`
  display: flex;
  justify-content: start;
  img {
    width: 5rem;
    filter: invert(97%) sepia(0%) saturate(1%) hue-rotate(148deg)
      brightness(87%) contrast(95%);
  }
`;

export const TestimonialsTextContainer = styled.div`
  margin-bottom: 1rem;
`;

export const TestimonialsClientContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: right;
`;

export const TestimonialsClientImage = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #feb60f;
  border-radius: 150px;
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 150px;
  }
`;

export const TestimonialsClientName = styled.div``;
