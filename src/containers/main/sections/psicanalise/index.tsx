import { Section } from 'containers/main/style'
import { TextWrapper, Title, Paragraph, PsicanaliseWrapper } from './style'
import ResponsiveWrapper from 'components/responsiveWrapper'
import imgUrl from 'assets/images/psicanalise-background-full.jpg'
import { SectionDivider } from 'components/sectionDivider/style'
import getImageHash from 'utils/getImageHash'

const Psicanalise = () => {
  return (
    <Section url={imgUrl} id="psicanalise-section">
      <PsicanaliseWrapper src={getImageHash(imgUrl)}>
        <ResponsiveWrapper>
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
        </ResponsiveWrapper>
      </PsicanaliseWrapper>
      <SectionDivider color="#14181b" />
    </Section>
  )
}

export default Psicanalise
