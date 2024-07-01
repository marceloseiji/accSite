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
import imgUrl from 'assets/images/amanda-psicanalista_min_b.jpg'
import getImageHash from 'utils/getImageHash'
import ResponsiveWrapper from 'components/responsiveWrapper'
import { colors } from 'styles/variables'
import ConsultButton from 'components/buttons/consultButton'
import {
  HomeButtonWrapper,
  SocialWrapper
} from 'components/buttons/consultButton/style'
import Image from 'components/image'
import SocialButton from 'components/buttons/social'
import { ShowOnMobile } from 'styles/globalStyle'

const Home = () => {
  const mobileScreen = 425
  const isMobile = window.innerWidth <= mobileScreen

  return (
    <Section
      $backgroundcolor={colors.primary}
      $screenheight={!isMobile}
      id="home-section"
    >
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
              <ShowOnMobile>
                <SocialWrapper>
                  <SocialButton.Instagram />
                  <SocialButton.WhatsApp />
                </SocialWrapper>
              </ShowOnMobile>
              <HomeButtonWrapper>
                <ConsultButton />
                <SocialWrapper>
                  <SocialButton.Instagram />
                  <SocialButton.WhatsApp />
                </SocialWrapper>
              </HomeButtonWrapper>
            </BlurWrapper>
          </TextWrapper>
        </HomeWrapper>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Home
