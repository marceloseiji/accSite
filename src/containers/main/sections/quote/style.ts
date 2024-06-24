import styled from 'styled-components'
import { colors, deviceSize, textSize } from 'styles/variables'

type QuoteMarquerProps = {
  $isStart: boolean
}

export const QuoteWrapper = styled.div`
  display: flex;
  padding: 6vh 0 0 0;
`

export const QuoteMarquer = styled.span<QuoteMarquerProps>`
  color: ${colors.white};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: ${textSize.ultraLarge};
  align-content: ${({ $isStart }) => ($isStart ? '' : 'flex-end')};
  line-height: ${({ $isStart }) => ($isStart ? '' : '0px')};

  @media ${deviceSize.tablet} {
    font-size: ${textSize.largest};
  }
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: ${textSize.large};
  padding-right: 8px;
  text-align: center;

  @media ${deviceSize.tablet} {
    font-size: ${textSize.extraLarge};
  }
`

export const QuoteAuthor = styled.p`
  color: ${colors.white};
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: ${textSize.small};
  padding: 3vh 0 6vh 0;
  margin-left: 24px;
`
