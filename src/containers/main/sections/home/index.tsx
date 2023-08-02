import ResponsiveWrapper from 'components/responsiveWrapper'
import { Section, Title, Paragraph, Hr, TitleWrapper } from './style'

const Home = () => {
  return (
    <Section>
      <ResponsiveWrapper>
        <TitleWrapper>
          <Title>AMANDA CALVETTI CORRÊA</Title>
          <Hr />
          <Paragraph>Psicologia clínica ∙ Psicanálise</Paragraph>
        </TitleWrapper>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Home
