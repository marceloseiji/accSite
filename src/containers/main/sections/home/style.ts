import styled from 'styled-components'
import { colors, textSize, deviceSize } from 'styles/variables'

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${deviceSize.tablet} {
    position: relative;
    left: -40px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    justify-content: center;
  }
`

export const BlurWrapper = styled.div`
  padding: 30px 60px;
  border: 1px solid #${colors.offWhite}80;
  position: relative;
  border-radius: 3px;
  background: ${colors.primary}65;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
`

export const Title = styled.h1`
  color: ${colors.white};
  font-family: 'Corinthia', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: ${textSize.large};
  margin-bottom: 16px;
  text-align: center;

  @media ${deviceSize.tablet} {
    font-size: ${textSize.largest};
    text-align: left;
    margin-bottom: 0px;
  }
`

export const Subtitle = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: 300;
  font-size: ${textSize.small};
  margin-top: 16px;
  text-align: center;
  position: relative;
  top: -12px;

  @media ${deviceSize.tablet} {
    text-align: left;
    margin-top: 0px;
  }
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: 300;
  font-size: ${textSize.small};
  margin-top: 16px;
  text-align: center;

  @media ${deviceSize.tablet} {
    text-align: left;
    margin-top: 0px;
    font-size: ${textSize.medium};
  }
`

export const Hr = styled.hr`
  border: 1px solid ${colors.offWhite};
  margin: 0 auto;
  width: 180px;

  @media ${deviceSize.tablet} {
    display: none;
  }
`

export const HomeWrapper = styled.div<{ src?: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${deviceSize.tablet} {
    background-image: none;
  }
`

export const HomeImage = styled.img<{ width: string; height: string }>`
  display: none;

  @media ${deviceSize.tablet} {
    border: 1px solid #${colors.offWhite}90;
    border-radius: 3px;
    display: initial;
    height: ${({ height }) => height || '100%'};
    width: ${({ width }) => width || '100%'};
    object-fit: cover;
  }
`

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
