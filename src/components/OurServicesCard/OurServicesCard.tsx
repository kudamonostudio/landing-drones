import { OurServicesCardContainer, OurServicesCardLogoContainer } from './OurServicesCard.styled'

interface OurServicesCardProps {
  icon: string;
  title: string
}

function OurServicesCard({icon, title}: OurServicesCardProps) {
  return (
    <OurServicesCardContainer>
        <OurServicesCardLogoContainer>
            <img src={icon} />
        </OurServicesCardLogoContainer>
        <p>{title}</p>
    </OurServicesCardContainer>
  )
}

export default OurServicesCard