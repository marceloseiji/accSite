import {
  Title,
  Paragraph,
  Hr,
  TextWrapper,
  HomeWrapper,
  HomeImage,
  ImageWrapper
} from './style'
import { Section } from 'containers/main/style'
import { SectionDivider } from 'components/sectionDivider/style'
import imgUrl from 'assets/images/home-background.jpg'
import getImageHash from 'utils/getImageHash'
import ResponsiveWrapper from 'components/responsiveWrapper'

const Home = () => {
  return (
    <Section
      url={getImageHash(imgUrl)}
      backgroundColor="#343230"
      id="home-section"
    >
      <ResponsiveWrapper>
        <HomeWrapper src={getImageHash(imgUrl)}>
          <ImageWrapper>
            <HomeImage src={getImageHash(imgUrl)} width="42%" height="60%" />
          </ImageWrapper>
          <TextWrapper>
            <Title>AMANDA CALVETTI CORRÊA</Title>
            <Hr />
            <Paragraph>Psicologia clínica ∙ Psicanálise</Paragraph>
          </TextWrapper>
        </HomeWrapper>
      </ResponsiveWrapper>
      <SectionDivider color="#161616" />
    </Section>
  )
}

export default Home
