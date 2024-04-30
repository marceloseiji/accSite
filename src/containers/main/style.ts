import styled from 'styled-components'
import getImageHash from 'utils/getImageHash'
import { deviceSize } from 'styles/variables'

export const MainSection = styled.main`
  width: 100%;
`

export const Section = styled.section<{ url: string }>`
  background-image: ${props => `url(${getImageHash(props.url)})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  position: relative;
  width: 100%;

  @media ${deviceSize.laptop} {
    background-position: right;
    background-size: initial;
  }
`
