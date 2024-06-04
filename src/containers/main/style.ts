import styled from 'styled-components'
import { deviceSize } from 'styles/variables'

type SectionProps = {
  url?: string
  backgroundColor?: string
}

export const MainSection = styled.main`
  width: 100%;
`

export const Section = styled.section<SectionProps>`
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  position: relative;
  width: 100%;

  @media ${deviceSize.tablet} {
    background-color: ${({ backgroundColor }) => backgroundColor || ''};
    background-position: right;
    background-size: initial;
    background-image: none;
  }
`
