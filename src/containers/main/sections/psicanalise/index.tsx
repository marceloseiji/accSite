import { Section, TextWrapper, Title, Paragraph } from "containers/main/style"
import ResponsiveWrapper from 'components/responsiveWrapper'
import imgUrl from 'assets/images/psicanalise-background.jpg'

const Psicanalise = () => {
  return (
    <Section url={imgUrl}>
      <ResponsiveWrapper>
        <TextWrapper>
          <Title>Como a psicanálise pode te ajudar?</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, an erant vivendo nominavi his, quas
            corpora at usu. Labore facilisis patrioque est ei, sed eu odio prima
            aliquam. Graecis percipit mea cu, dignissim democritum suscipiantur
            sed ei, vis eu summo platonem adolescens. Mel solum verear id, qui
            quem mazim recusabo in. Ad vix natum suscipit, persius prodesset ea
            pri. Homero partiendo ex mei. Latine signiferumque ad eos, decore
            ullamcorper nam cu. Vide percipitur vix cu, ne sit omnesque
            urbanitas.
          </Paragraph>
        </TextWrapper>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Psicanalise
