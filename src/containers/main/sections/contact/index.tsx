import { Section } from 'containers/main/style'
import { TextWrapper, Title, Paragraph, ButtonsWrapper } from './style'
import ResponsiveWrapper from 'components/responsiveWrapper'
import imgUrl from 'assets/images/contact-background.jpg'
import SocialButton from 'components/buttons/social'

const Contact = () => {
  return (
    <Section url={imgUrl} id="contact-section">
      <ResponsiveWrapper>
        <TextWrapper>
          <Title>Contato</Title>
          <Paragraph>(41) 99922-9920</Paragraph>
          <Paragraph>Centro Cívico | Curitiba, PR</Paragraph>
          <ButtonsWrapper>
            <SocialButton.Instagram />
            <SocialButton.WhatsApp />
          </ButtonsWrapper>
        </TextWrapper>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Contact
