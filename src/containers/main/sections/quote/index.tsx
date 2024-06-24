import { Section } from 'containers/main/style'
import { QuoteWrapper, QuoteMarquer, Paragraph, QuoteAuthor } from './style'
import ResponsiveWrapper from 'components/responsiveWrapper'
import { colors } from 'styles/variables'

const Quote = () => {
  return (
    <Section id="quote" $backgroundcolor={colors.primary}>
      <ResponsiveWrapper>
        <QuoteWrapper>
          <QuoteMarquer $isStart>&quot;</QuoteMarquer>
          <Paragraph>
            Lorem ipsum dolor sit amet, an erant vivendo nominavi his, quas
            corpora at usu. Labore facilisis patrioque est ei, sed eu odio prima
            aliquam
          </Paragraph>
          <QuoteMarquer $isStart={false}>&quot;</QuoteMarquer>
        </QuoteWrapper>
        <QuoteAuthor>Loremm Ipsumm</QuoteAuthor>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Quote
