import { styled } from "styled-components";

export const TestimonialsContainer = styled.div`
  width: 100%;
  background-color: rgb(51 78 59 / 75%);
  padding: 3rem 0;
  hr{
    margin-bottom: 3rem;
  }
  @media (min-width: 1040px) {
    .fade{
      width: 30rem;
    }
  }
`;

export const TestimonialsCardsContainer = styled.div`
display: flex;
justify-content: space-between;
gap: 1rem;
padding: 2rem;
@media (max-width: 1040px) {
  flex-direction: column;
  align-items: center;
  justify-content: inherit;
}
`
