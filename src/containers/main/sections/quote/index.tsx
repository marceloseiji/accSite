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
            Tolerar a vida continua a ser, afinal, a primeira tarefa de todos os
            seres vivos.
          </Paragraph>
          <QuoteMarquer $isStart={false}>&quot;</QuoteMarquer>
        </QuoteWrapper>
        <QuoteAuthor>Freud, 1915</QuoteAuthor>
      </ResponsiveWrapper>
    </Section>
  )
}

export default Quote
