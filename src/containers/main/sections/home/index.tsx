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
                Olá
                <br />
                <br />
                Eu me chamo Amanda, sou Psicóloga (CRP 08/27780) graduada pela
                Universidade Federal do Paraná - UFPR. Também realizo um
                mestrado em Psicologia pela UFPR, e possuo especialização no
                formato de Resdiência em Atenção à Saúde do Adulto e Idoso em
                Psicologia/Psicanálise, realizado pelo Complexo Hospital de
                Clínicas também da UFPR.
                <br />
                <br />
                <TextImageWrapper>
                  <Image
                    src={getImageHash(imgUrl)}
                    width="210px"
                    height="230px"
                  />
                </TextImageWrapper>
                Direcionei meus estudos e carreira para a área da psicanálise e
                psicologia clínica, a partir da formação continuada com o tripé:
                estudos teóricos, supervisão e análise pessoal.
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
