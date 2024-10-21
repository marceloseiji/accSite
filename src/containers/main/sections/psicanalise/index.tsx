import { Section } from 'containers/main/style'
import {
  TextWrapper,
  Title,
  Paragraph,
  PsicanaliseWrapper,
  ImageWrapper,
  SectionImage,
  AdditionalTextWrapperMobile,
  AdditionalTextWrapperDesktop
} from './style'
import ResponsiveWrapper from 'components/responsiveWrapper'
import getImageHash from 'utils/getImageHash'
import imgUrl from 'assets/images/home-background.jpg'
import { colors } from 'styles/variables'
import ConsultButton from 'components/buttons/consultButton'
import { PsicanaliseButtonWrapper } from 'components/buttons/consultButton/style'

const Psicanalise = () => {
  return (
    <Section $backgroundcolor={colors.primaryStrong} id="psicanalise-section">
      <ResponsiveWrapper>
        <PsicanaliseWrapper>
          <TextWrapper>
            <Title>Como a psicanálise pode te ajudar?</Title>
            <Paragraph>
              Atendo pessoas com queixas variadas como depressão, ansiedade,
              problemas de relacionamentos, autoestima, luto, situações
              traumáticas, etc. No entanto, acredito que cada história é única e
              o processo da análise vai na direção de poder dar um nome
              &quot;próprio&quot; ao nosso sofrimento e forma de estar no mundo.
            </Paragraph>

            <AdditionalTextWrapperDesktop>
              <Paragraph>
                A minha escuta como analista está atenta para ouvir o que você
                está dizendo, muitas vezes sem perceber que diz, e, dessa forma,
                a partir de uma relação de acolhimento e cuidado, você tem a
                oportunidade de dar voz ao seu conflito psíquico. Isso
                possibilita uma apropriação e elaboração da própria história,
                além da criação de um futuro mais alinhado à singularidade de
                cada um.
              </Paragraph>
              <PsicanaliseButtonWrapper>
                <ConsultButton />
              </PsicanaliseButtonWrapper>
            </AdditionalTextWrapperDesktop>
          </TextWrapper>
          <ImageWrapper>
            <SectionImage
              src={getImageHash(imgUrl)}
              width="100%"
              height="100%"
            />
          </ImageWrapper>
          <AdditionalTextWrapperMobile>
            <Paragraph>
              A minha escuta como analista está atenta para ouvir o que você
              está dizendo, muitas vezes sem perceber que diz, e, dessa forma, a
              partir de uma relação de acolhimento e cuidado, você tem a
              oportunidade de dar voz ao seu conflito psíquico. Isso possibilita
              uma apropriação e elaboração da própria história, além da criação
              de um futuro mais alinhado à singularidade de cada um.
            </Paragraph>
          </AdditionalTextWrapperMobile>
        </PsicanaliseWrapper>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Psicanalise
