import {
  Title,
  Paragraph,
  Hr,
  TextWrapper,
  HomeWrapper,
  HomeImage,
  ImageWrapper,
  BlurWrapper,
  Subtitle
} from './style'
import { Section } from 'containers/main/style'
import { SectionDivider } from 'components/sectionDivider/style'
import imgUrl from 'assets/images/home-background.jpg'
import getImageHash from 'utils/getImageHash'
import ResponsiveWrapper from 'components/responsiveWrapper'
import { colors } from 'styles/variables'

const Home = () => {
  return (
    <Section backgroundcolor={colors.primary} id="home-section">
      <ResponsiveWrapper>
        <HomeWrapper>
          <ImageWrapper>
            <HomeImage src={getImageHash(imgUrl)} width="100%" height="60%" />
          </ImageWrapper>
          <TextWrapper>
            <BlurWrapper>
              <Title>Amanda Calvetti Corrêa</Title>
              <Hr />
              <Subtitle>Psicologia clínica ∙ Psicanálise</Subtitle>
              <Paragraph>
                Lorem ipsum dolor sit amet, an erant vivendo nominavi his, quas
                corpora at usu. Labore facilisis patrioque est ei, sed eu odio
                prima aliquam. Graecis percipit mea cu, dignissim democritum
                suscipiantur sed ei, vis eu summo platonem adolescens. Mel solum
                verear id, qui quem mazim recusabo in. Graecis percipit mea cu,
                dignissim democritum suscipiantur sed ei, vis eu summo platonem
                adolescens. Mel solum verear id, qui quem mazim recusabo in.
                <br />
                <br />
                Graecis percipit mea cu, dignissim democritum suscipiantur sed
                ei, vis eu summo platonem adolescens. Mel solum verear id, qui
                quem mazim recusabo in.
              </Paragraph>
            </BlurWrapper>
          </TextWrapper>
        </HomeWrapper>
      </ResponsiveWrapper>
      <SectionDivider color="#161616" />
    </Section>
  )
}

export default Home
