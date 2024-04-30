import styled from 'styled-components'
import { colors, textSize, deviceSize } from 'styles/variables'

export const TitleWrapper = styled.div`
  padding-top: 10vh;

  @media ${deviceSize.laptop} {
    padding-top: 30vh;
  }
`

export const Title = styled.h1`
  color: ${colors.white};
  font-family: 'Belleza', sans-serif;
  font-weight: normal;
  font-size: ${textSize.large};
  margin-bottom: 16px;
  text-align: center;
  text-shadow: ${colors.blackTextShadow} 1px 0 10px;

  @media ${deviceSize.laptop} {
    font-size: ${textSize.extraLarge};
    text-align: left;
    margin-bottom: 0px;
  }
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: bold;
  font-size: ${textSize.small};
  margin-top: 16px;
  text-align: center;
  text-shadow: ${colors.blackTextShadow} 1px 0 6px;

  @media ${deviceSize.laptop} {
    text-align: left;
    margin-top: 0px;
    font-weight: 100;
    font-size: ${textSize.medium};
  }
`
export const Hr = styled.hr`
  border: 1px solid ${colors.white}50;
  margin: auto;
  width: 180px;

  @media ${deviceSize.laptop} {
    display: none;
  }
`
