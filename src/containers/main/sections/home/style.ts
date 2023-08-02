import styled from 'styled-components'
import imgUrl from 'assets/images/site-home.jpg'
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
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: normal;
  font-size: ${textSize.small};
  text-align: center;
  padding-top: 16px;
`
export const Hr = styled.hr`
  border: 1px solid ${colors.white}50;
  margin: auto;
  width: 180px;
`
