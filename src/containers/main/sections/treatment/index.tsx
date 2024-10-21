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
    <Section $backgroundcolor={colors.primaryStrong} id="treatment-section">
      <ResponsiveWrapper>
        <TreatmentWrapper>
          <TextWrapper>
            <Title>Como a psicanálise pode te ajudar?</Title>
            <Paragraph>
              Os atendimentos são prestados em meu consultório com localização
              privilegiada da cidade de Curitiba, próximo ao Shopping Mueller,
              com uma estrutura bem preparada.
            </Paragraph>

            <AdditionalTextWrapperDesktop>
              <Paragraph>
                Também é possível realizá-lo de forma online. Entre em contato
                pelo meu perfil para conversarmos!
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
              Também é possível realizá-lo de forma online. Entre em contato
              pelo meu perfil para conversarmos!
            </Paragraph>
          </AdditionalTextWrapperMobile>
        </TreatmentWrapper>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Treatment
