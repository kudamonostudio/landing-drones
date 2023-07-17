import { TestimonialsQuotesContainer, TestimonialsCardContainer, TestimonialsTextContainer, TestimonialsClientContainer, TestimonialsClientImage, TestimonialsClientName } from './TestimonialsCard.styled';

interface TestimonialsCardProps {
    text: string, 
    name: string
    img: string
}

function TestimonialsCard({ text, name, img }: TestimonialsCardProps ) {
  return (
    <TestimonialsCardContainer>
        <TestimonialsQuotesContainer>
            <img src="https://www.svgrepo.com/show/389721/quotes-end.svg" alt="" />
        </TestimonialsQuotesContainer>
        <TestimonialsTextContainer>
            <p>{text}</p>
        </TestimonialsTextContainer>
        <TestimonialsClientContainer>
            <TestimonialsClientImage>
                <img src={img} alt="" />
            </TestimonialsClientImage>
            <TestimonialsClientName>
                <h4>{name}</h4>
            </TestimonialsClientName>
        </TestimonialsClientContainer>
    </TestimonialsCardContainer>
  )
}

export default TestimonialsCard