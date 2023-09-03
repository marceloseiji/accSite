import styled from 'styled-components'
import { colors, textSize } from 'styles/variables'

export const MainSection = styled.main`
  width: 100%;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 18vh 40px 0 32px;
`

export const Title = styled.div`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: 400;
  font-size: ${textSize.large};
  margin-bottom: 24px;
  text-align: left;
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: 300;
  font-size: ${textSize.small};
  padding-top: 16px;
  text-align: left;
`