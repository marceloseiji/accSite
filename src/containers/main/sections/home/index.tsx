import ResponsiveWrapper from 'components/responsiveWrapper'
import { Title, Paragraph, Hr, TitleWrapper } from './style'
import { Section } from 'containers/main/style'
import { SectionDivider } from 'components/sectionDivider/style'
import Backdrop from 'components/backdrop'
import imgUrl from 'assets/images/home-background.jpg'

const Home = () => {
  return (
    <Section url={imgUrl} id="home-section">
      <ResponsiveWrapper>
        <TitleWrapper>
          <Title>AMANDA CALVETTI CORRÊA</Title>
          <Hr />
          <Paragraph>Psicologia clínica ∙ Psicanálise</Paragraph>
        </TitleWrapper>
      </ResponsiveWrapper>
      <Backdrop />
      <SectionDivider color="#161616" />
    </Section>
  )
}

export default Home
