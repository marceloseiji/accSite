import styled from 'styled-components'
import { colors, textSize, deviceSize } from 'styles/variables'

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 60vh;

  @media ${deviceSize.tablet} {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 35vh;
    padding-left: 3vw;
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
  margin: 0 auto;
  width: 180px;

  @media ${deviceSize.tablet} {
    display: none;
  }
`

export const HomeWrapper = styled.div<{ src: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${deviceSize.tablet} {
    background-image: none;
    background-color: #343230;
  }
`

export const HomeImage = styled.img<{ width: string; height: string }>`
  display: none;

  @media ${deviceSize.tablet} {
    display: initial;
    height: ${({ height }) => height || '100%'};
    width: ${({ width }) => width || '100%'};
    object-fit: cover;
  }
`

export const ImageWrapper = styled.div`
  flex: 1;
`
