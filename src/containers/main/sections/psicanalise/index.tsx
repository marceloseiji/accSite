import { Section } from 'containers/main/style'
import {
  TextWrapper,
  Title,
  Paragraph,
  PsicanaliseWrapper,
  ImageWrapper
} from './style'
import ResponsiveWrapper from 'components/responsiveWrapper'
import getImageHash from 'utils/getImageHash'
import Image from 'components/image'
import imgUrl from 'assets/images/amanda-psicanalista_min.jpg'
import { colors } from 'styles/variables'

const Psicanalise = () => {
  return (
    <Section backgroundcolor={colors.primaryStrong} id="psicanalise-section">
      <ResponsiveWrapper>
        <PsicanaliseWrapper>
          <TextWrapper>
            <Title>Como a psicanálise pode te ajudar?</Title>
            <Paragraph>
              A psicanálise é uma teoria e método terapêutico criado por Sigmund
              Freud, focado na compreensão das influências inconscientes na
              mente humana. Envolve a exploração de desejos, memórias reprimidas
              e conflitos emocionais através da livre associação e
              interpretação, visando trazer insight, alívio emocional e mudanças
              comportamentais.
            </Paragraph>
            <Paragraph>
              Ela influenciou profundamente a psicologia e o entendimento da
              mente humana.
            </Paragraph>
          </TextWrapper>
          <ImageWrapper>
            <Image src={getImageHash(imgUrl)} width="250px" height="250px" />
          </ImageWrapper>
        </PsicanaliseWrapper>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Psicanalise
