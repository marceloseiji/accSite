import styled from 'styled-components'
import { colors, textSize } from 'styles/variables'

export const TitleWrapper = styled.div`
  padding-top: 10vh;
`

export const Title = styled.h1`
  color: ${colors.white};
  font-family: 'Julius Sans One';
  font-weight: normal;
  font-size: ${textSize.medium};
  margin-bottom: 16px;
  text-align: center;
  text-shadow: ${colors.blackTextShadow} 1px 0 10px;
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: bold;
  font-size: ${textSize.small};
  padding-top: 16px;
  text-align: center;
  text-shadow: ${colors.blackTextShadow} 1px 0 6px;
`
export const Hr = styled.hr`
  border: 1px solid ${colors.white}50;
  margin: auto;
  width: 180px;
`
