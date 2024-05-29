import {
  Title,
  Paragraph,
  Hr,
  TextWrapper,
  HomeWrapper,
  HomeImage
} from './style'
import { Section } from 'containers/main/style'
import { SectionDivider } from 'components/sectionDivider/style'
import imgUrl from 'assets/images/home-background.jpg'
import getImageHash from 'utils/getImageHash'

const Home = () => {
  return (
    <Section id="home-section">
      <HomeWrapper src={getImageHash(imgUrl)}>
        <HomeImage src={getImageHash(imgUrl)} width="45%" height="100%" />
        <TextWrapper>
          <Title>AMANDA CALVETTI CORRÊA</Title>
          <Hr />
          <Paragraph>Psicologia clínica ∙ Psicanálise</Paragraph>
        </TextWrapper>
      </HomeWrapper>
      <SectionDivider color="#161616" />
    </Section>
  )
}

export default Home
