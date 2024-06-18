import { Section } from 'containers/main/style'
import {
  TextWrapper,
  Title,
  Paragraph,
  PsicanaliseWrapper,
  ImageWrapper,
  SectionImage,
  AdditionalTextWrapperDesktop,
  AdditionalTextWrapperMobile
} from './style'
import ResponsiveWrapper from 'components/responsiveWrapper'
import getImageHash from 'utils/getImageHash'
import imgUrl from 'assets/images/amanda-psicanalista_min_b.jpg'
import { colors } from 'styles/variables'

const Psicanalise = () => {
  return (
    <Section $backgroundcolor={colors.primaryStrong} id="psicanalise-section">
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

            <AdditionalTextWrapperDesktop>
              <Paragraph>
                A psicanálise é uma teoria e método terapêutico criado por
                Sigmund Freud, focado na compreensão das influências
                inconscientes na mente humana. Envolve a exploração de desejos,
                memórias reprimidas e conflitos emocionais através da livre
                associação e interpretação, visando trazer insight, alívio
                emocional e mudanças comportamentais.
              </Paragraph>
              <Paragraph>
                Ela influenciou profundamente a psicologia e o entendimento da
                mente humana.
              </Paragraph>
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
          </AdditionalTextWrapperMobile>
        </PsicanaliseWrapper>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Psicanalise
