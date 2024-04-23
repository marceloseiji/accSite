import styled from 'styled-components'
import { colors, textSize, deviceSize } from 'styles/variables'

export const TitleWrapper = styled.div`
  padding-top: 10vh;
`

export const Title = styled.h1`
  color: ${colors.white};
  font-family: 'Belleza', sans-serif;
  font-weight: normal;
  font-size: ${textSize.medium};
  margin-bottom: 16px;
  text-align: center;
  text-shadow: ${colors.blackTextShadow} 1px 0 10px;

  @media ${deviceSize.laptop} {
    font-size: ${textSize.extraLarge};
    text-align: left;
  }
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: bold;
  font-size: ${textSize.small};
  padding-top: 16px;
  text-align: center;
  text-shadow: ${colors.blackTextShadow} 1px 0 6px;

  @media ${deviceSize.laptop} {
    text-align: left;
  }
`
export const Hr = styled.hr`
  border: 1px solid ${colors.white}50;
  margin: auto;
  width: 180px;
`
