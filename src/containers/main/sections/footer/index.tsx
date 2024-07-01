import { Section } from 'containers/main/style'
import { TextWrapper, Title, Paragraph, ButtonsWrapper, Logo } from './style'
import ResponsiveWrapper from 'components/responsiveWrapper'
import SocialButton from 'components/buttons/social'
import { colors } from 'styles/variables'

const Footer = () => {
  return (
    <Section $backgroundcolor={colors.primary} id="contact-section">
      <ResponsiveWrapper>
        <TextWrapper>
          <Title>Contato</Title>
          <Paragraph>(41) 99922-9920</Paragraph>
          <Paragraph>Centro Cívico | Curitiba, PR</Paragraph>
          <Logo>Amanda Caveltti Corrêa</Logo>
          <ButtonsWrapper>
            <SocialButton.Instagram />
            <SocialButton.WhatsApp />
          </ButtonsWrapper>
        </TextWrapper>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Footer
