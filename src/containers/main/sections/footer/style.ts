import styled from 'styled-components'
import { colors, deviceSize, textSize } from 'styles/variables'

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 10px;
  padding: 20px 0 160px 0;

  @media ${deviceSize.tablet} {
    padding: 32px 0;
  }
`

export const Title = styled.div`
  color: ${colors.white};
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: ${textSize.medium};
  text-align: center;

  @media ${deviceSize.tablet} {
    font-size: ${textSize.large};
  }
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Poppins', sans-serif;
  font-size: ${textSize.tiny};
  padding-top: 8px;
  text-align: center;
`

export const ButtonsWrapper = styled.div`
  align-self: center;
  display: flex;
  margin-top: 10px;
  gap: 10px;
`

export const Logo = styled.h1`
  color: ${colors.white};
  font-family: 'Corinthia', cursive;
  font-style: normal;
  font-weight: bold;
  font-size: ${textSize.extraLarge};
  margin-top: 16px;
  text-align: center;

  @media ${deviceSize.tablet} {
    font-size: ${textSize.extraLarge};
    margin: 0px;
  }
  @media ${deviceSize.laptop} {
    font-size: ${textSize.ultraLarge};
  }
  @media ${deviceSize.desktop} {
    font-size: ${textSize.largest};
  }
`
