import styled from 'styled-components'
import { colors, textSize, deviceSize } from 'styles/variables'

export const MainSection = styled.main`
  width: 100%;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
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

export const PsicanaliseWrapper = styled.div<{ src: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${deviceSize.tablet} {
  }
`

export const PsicanaliseImage = styled.img`
  display: none;

  @media ${deviceSize.tablet} {
    display: initial;
    height: 100%;
    width: 45%;
    object-fit: cover;
  }
`
