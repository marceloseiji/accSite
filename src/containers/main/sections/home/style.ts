import styled from 'styled-components'
import imgUrl from 'assets/images/consultorio-home.jpg'
import getImageHash from 'utils/getImageHash'
import { colors, textSize } from 'styles/variables'

export const Section = styled.section`
  background-image: url(${getImageHash(imgUrl)});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`

export const TitleWrapper = styled.div`
  padding-top: 15vh;
`

export const Title = styled.h1`
  color: ${colors.white};
  font-family: 'Julius Sans One';
  font-weight: normal;
  font-size: ${textSize.large};
  margin-bottom: 16px;
  text-align: center;
  text-shadow: 1px 1px 3px ${colors.grayTextShadow};
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: bold;
  font-size: ${textSize.small};
  padding-top: 16px;
  text-align: center;
  text-shadow: 1px 1px 5px ${colors.blackTextShadow};
`
export const Hr = styled.hr`
  border: 1px solid ${colors.white}50;
  margin: auto;
  width: 180px;
`
