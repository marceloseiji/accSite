import styled from 'styled-components'
import getImageHash from 'utils/getImageHash'

export const MainSection = styled.main`
  width: 100%;
`

export const Section = styled.section<{url: string}>`
  background-image: ${props => `url(${getImageHash(props.url)})`};
  background-position: center;
  background-size: cover;
  height: 100%;
  position: relative;
  width: 100%;
`
