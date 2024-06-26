import { Section } from 'containers/main/style'
import {
  TextWrapper,
  Title,
  Paragraph,
  TreatmentWrapper,
  ImageWrapper,
  SectionImage,
  AdditionalTextWrapperMobile,
  AdditionalTextWrapperDesktop
} from './style'
import ResponsiveWrapper from 'components/responsiveWrapper'
import getImageHash from 'utils/getImageHash'
import imgUrl from 'assets/images/psicanalise-clinica_2_min.jpg'
import { colors } from 'styles/variables'
import ConsultButton from 'components/buttons/consultButton'
import { PsicanaliseButtonWrapper } from 'components/buttons/consultButton/style'

const Treatment = () => {
  return (
    <Section $backgroundcolor={colors.primaryStrong} id="psicanalise-section">
      <ResponsiveWrapper>
        <TreatmentWrapper>
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
        </TreatmentWrapper>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Treatment
