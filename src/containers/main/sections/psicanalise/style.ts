import styled from 'styled-components'
import { colors, textSize, deviceSize } from 'styles/variables'

export const MainSection = styled.main`
  width: 100%;
`

export const TextWrapper = styled.div``

export const Title = styled.div`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: 300;
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

export const PsicanaliseWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  @media ${deviceSize.tablet} {
    flex-direction: row;
  }
`

export const ImageWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`
