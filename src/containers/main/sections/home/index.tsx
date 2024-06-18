import {
  Title,
  Paragraph,
  TextWrapper,
  HomeWrapper,
  ImageWrapper,
  BlurWrapper,
  Subtitle,
  TextImageWrapper
} from './style'
import { Section } from 'containers/main/style'
import imgUrl from 'assets/images/home-background.jpg'
import getImageHash from 'utils/getImageHash'
import ResponsiveWrapper from 'components/responsiveWrapper'
import { colors } from 'styles/variables'
import ConsultButton from 'components/buttons/consultButton'
import { HomeButtonWrapper } from 'components/buttons/consultButton/style'
import Image from 'components/image'

const Home = () => {
  return (
    <Section backgroundcolor={colors.primary} id="home-section">
      <ResponsiveWrapper>
        <HomeWrapper>
          <ImageWrapper>
            <Image src={getImageHash(imgUrl)} width="100%" height="60%" />
          </ImageWrapper>
          <TextWrapper>
            <BlurWrapper>
              <Title>Amanda Calvetti Corrêa</Title>
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
                <TextImageWrapper>
                  <Image
                    src={getImageHash(imgUrl)}
                    width="210px"
                    height="230px"
                  />
                </TextImageWrapper>
                Graecis percipit mea cu, dignissim democritum suscipiantur sed
                ei, vis eu summo platonem adolescens. Mel solum verear id, qui
                quem mazim recusabo in.
              </Paragraph>
              <HomeButtonWrapper>
                <ConsultButton />
              </HomeButtonWrapper>
            </BlurWrapper>
          </TextWrapper>
        </HomeWrapper>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Home
