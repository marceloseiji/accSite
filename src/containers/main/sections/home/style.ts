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

export const Title = styled.h1`
  color: ${colors.white};
  font-family: 'Julius';
`
