import { Section } from 'containers/main/style'
import { TextWrapper, Title, Paragraph } from './style'
import ResponsiveWrapper from 'components/responsiveWrapper'
import imgUrl from 'assets/images/about-background.jpg'
import { SectionDivider } from 'components/sectionDivider/style'

const About = () => {
  return (
    <Section url={imgUrl} id="about-section">
      <ResponsiveWrapper>
        <TextWrapper>
          <Title>Amanda Calvetti Corrêa</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, an erant vivendo nominavi his, quas
            corpora at usu. Labore facilisis patrioque est ei, sed eu odio prima
            aliquam.
          </Paragraph>
          <Paragraph>
            Ad vix natum suscipit, persius prodesset ea pri. Homero partiendo ex
            mei. Latine signiferumque ad eos, decore ullamcorper nam.
          </Paragraph>
          <Paragraph>
            Latine signiferumque ad eos, decore ullamcorper nam.
          </Paragraph>
        </TextWrapper>
        <SectionDivider color="#444243" />
      </ResponsiveWrapper>
    </Section>
  )
}

export default About
