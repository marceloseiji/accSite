import styled from 'styled-components'
import { colors, textSize, deviceSize } from 'styles/variables'

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media ${deviceSize.tablet} {
    position: relative;
    left: -40px;
    display: flex;
    flex-direction: column;
    flex: 3;
    align-items: flex-start;
    justify-content: center;
  }
`

export const ImageWrapper = styled.div`
  display: none;

  @media ${deviceSize.tablet} {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const TextImageWrapper = styled.div`
  @media ${deviceSize.tablet} {
    display: none;
  }
`

export const BlurWrapper = styled.div`
  position: relative;
  background: transparent;
  margin-top: 24px;

  @media ${deviceSize.tablet} {
    border-radius: 3px;
    background: ${colors.primary}65;
    border: 1px solid #${colors.offWhite}80;
    padding: 30px 60px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
`

export const Title = styled.h1`
  color: ${colors.white};
  font-family: 'Corinthia', cursive;
  font-style: normal;
  font-weight: bold;
  font-size: ${textSize.extraLarge};
  margin-bottom: 16px;
  text-align: center;

  @media ${deviceSize.tablet} {
    font-size: ${textSize.extraLarge};
    text-align: left;
    margin-bottom: 0px;
  }
  @media ${deviceSize.laptop} {
    font-size: ${textSize.ultraLarge};
  }
  @media ${deviceSize.desktop} {
    font-size: ${textSize.largest};
  }
`

export const Subtitle = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: 300;
  font-size: ${textSize.tiny};
  margin-top: 16px;
  text-align: center;
  position: relative;
  top: -10px;

  @media ${deviceSize.tablet} {
    font-size: ${textSize.small};
    text-align: left;
    margin-top: 0px;
  }
  @media ${deviceSize.laptop} {
    top: -20px;
  }
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: 300;
  font-size: ${textSize.tiny};
  margin-top: 16px;
  margin-bottom: 24px;
  text-align: center;

  @media ${deviceSize.tablet} {
    font-size: ${textSize.small};
    text-align: left;
    margin-top: 0px;
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
`

export const HomeImage = styled.img<{ width: string; height: string }>`
  border: 1px solid #${colors.offWhite}90;
  border-radius: 3px;
  display: initial;
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || '100%'};
  object-fit: cover;
`
