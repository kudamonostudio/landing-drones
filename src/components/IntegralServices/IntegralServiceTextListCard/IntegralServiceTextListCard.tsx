import { IntegralServiceTextListCardContainer } from "./IntegralServiceTextListCard.styled";

interface IntegralServiceTextListCardProps {
  icon: string;
  text: string;
}

function IntegralServiceTextListCard({
  icon,
  text,
}: IntegralServiceTextListCardProps) {
  return (
    <IntegralServiceTextListCardContainer>
      <img src={icon} />
      <p>{text}</p>
    </IntegralServiceTextListCardContainer>
  );
}

export default IntegralServiceTextListCard;
